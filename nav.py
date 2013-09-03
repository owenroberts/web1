#adds LF breaks to html for document.write to work in nav.js
#probably bad practice?

nav = open("nav.html", 'r')
f = open("nav.js", 'r+')
js = f.read()

f.seek(0)
f.write("document.write('\\")

for line in nav:
    line = line.strip()
    f.write(line)
    
f.write("');")
f.close()