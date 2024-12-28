#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
	echo "missing fileName as parameter 1" >&2
	exit 1
fi
fileName="$1"
if [[ ! "$fileName" =~ \.mp4$ && ! "$fileName" =~ \.MP4$ ]]; then
    echo "fileName must end with .mp4" >&2
    exit 1
fi
outputFile="${fileName%.mp4}.gif"
if [ "$#" -gt 3 ]; then
	startTime="$3"
	durationTime=$(($4 - startTime))
	ffmpeg -y -i ${fileName} -ss ${startTime} -t ${durationTime} -vf "fps=15,scale=640:-1:flags=lanczos,palettegen" palette.png
	ffmpeg -y -i ${fileName} -i palette.png -ss ${startTime} -t ${durationTime} -filter_complex "fps=15,scale=640:-1:flags=lanczos[x];[x][1:v]paletteuse" ${outputFile}
else
	ffmpeg -y -i ${fileName} -vf "fps=15,scale=640:-1:flags=lanczos,palettegen" palette.png
	ffmpeg -y -i ${fileName} -i palette.png -filter_complex "fps=15,scale=640:-1:flags=lanczos[x];[x][1:v]paletteuse" ${outputFile}
fi
# optimisation sequence
gifsicle -O3 --colors 256 ${outputFile} -o ${outputFile}

if [ "$#" -lt 2 ]; then
	echo "gif without lossy optimization done with name ${outputFile}"
	exit 0
fi
maxSize="$2"
for i in $(seq 10 20 90); do	
	fileSize=$(du -m "$outputFile" | cut -f1)
	if [[ "$fileSize" -lt "$maxSize" ]]; then
		echo "gif with lossy optimization done with name ${outputFile}"
		exit 0
	fi
	gifsicle -O3 --colors 256 --lossy="$i" ${outputFile} -o ${outputFile}
done
echo "gif with lossy optimization done with name ${outputFile}"
exit 0