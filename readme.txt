1. bootstrap needs 64 X 64 images to work correctly.
	i used this site to get them (min) to 100 X 100:  http://www.imageoptimizer.net/Home/View-optimized-image.aspx?id=705563c9-9fe5-4e8e-a9ca-320bec2d703b
	150X66 looks ok for the smartboard. 350 X 140 was good for iframe.
2. 	the iframe scr can be an scr ; https://www.tutorialspoint.com//html/html_iframes.htm
3. I was missing the script for bootstrap. I need to get a later version. - the older version puts the writting below the image in the bootstrap media component
4. to activate a function when using bootstrap radio buttons, use ng-change='newValue(option) in the html and call the function in the controller. (passing in the option.) Some angular features do not work when you use the bootstrap binding
saving data for reports will just be an array of objects: each object will have the question id, so to get the results, play the lesson and fill in the data by using the report data via question id
bootstrap full width div; see http://stackoverflow.com/questions/24049467/how-to-create-a-100-screen-width-div-inside-a-container-in-bootstrap
fullscreen bootstrap modal https://codepen.io/yewnork/pen/Kpaqeq