set -e;

if [ $# -eq 0 ]; then
echo "Usage: $0 step";
echo "";
echo "'step' is of the form XX or XX-solution, where X are digits"
exit 1;
fi

STEP=$1;
BASE=${0%/*};

cd $BASE
echo "Removing previous workspace"
rm -rf workspace/*
echo "Copying over files from step-$STEP"
mkdir -p workspace/src
cp -r step-$STEP/ workspace/
echo "Copying in assets"
cp -r assets workspace/assets
echo "Copying in package.json"
cp -r package.json workspace/
echo "Reinstalling node_modules"
cd workspace
ln -s ../node_modules node_modules
