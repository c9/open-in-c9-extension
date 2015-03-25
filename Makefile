INPUT = manifest.json githubc9.user.js c9-16.png c9-48.png c9-128.png

all: open-in-c9.zip

open-in-c9: $(INPUT)
	mkdir -p $@
	cp $^ $@

open-in-c9.zip: open-in-c9 $(INPUT)
	zip -r $@ open-in-c9

clean:
	rm -rf open-in-c9.zip open-in-c9

