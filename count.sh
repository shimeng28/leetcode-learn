count=0;

for file in `ls ./files`
do
  ((count++));
done

if [ $count -gt 50 ]; then
  echo "你已经完成${count}道算法题了, 你真棒！👍";
else 
  echo "继续努力💪，你已经完成${count}道算法题了";
fi
