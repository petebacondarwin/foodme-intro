echo "-- changes in this step"
diff -b -C 2 step-$1 step-$1-solution

echo "-- changes from last step"
diff -b -C 2 step-$(($1-1))-solution step-$1