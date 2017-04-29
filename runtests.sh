for ((i=0; i<10; i++)) do
    node_modules/mocha/bin/mocha test/test $i >> output.txt
done