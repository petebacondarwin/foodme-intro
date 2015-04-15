printf -v currentStep "%0*d" 2 $1
echo ">>>>>>>>>>>> changes in step-$currentStep"
diff -b -C 2 step-$currentStep step-$currentStep-solution

let lastStepVal=$1-1
printf -v lastStep "%0*d" 2 $lastStepVal
echo ">>>>>>>>>>>> changes between step-$lastStep and step-$currentStep"
diff -b -C 2 step-$lastStep-solution step-$currentStep