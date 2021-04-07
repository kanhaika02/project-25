class paper{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	 var options = {
		'restitution' : 0.3,
		'friction' : 5,
		'density' : 1
	 }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
    this.image = loadImage("project 25/paper.png");
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
      ellipse(0, 0, this.r, this.r);
      image (this.image,0,0,this.width,this.height);
			pop()
	}

}
        
        
        
       
        
      
