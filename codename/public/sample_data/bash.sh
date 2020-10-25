# For each file in Data folder
for f in "Data"/*; do
    # Change first line to var
    var="a,id,CountyName,State,rate"
    sed -i "1s/.*/$var/" $f
done
