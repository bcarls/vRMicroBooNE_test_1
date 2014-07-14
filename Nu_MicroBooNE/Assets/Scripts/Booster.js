#pragma strict



var projectile : Rigidbody;
var speed : float = 40;
var force : float = 4;

function Update () {
    // Put this in your update function
    if (Input.GetKeyDown(KeyCode.F)) {
 
    // Instantiate the projectile at the position and rotation of this transform
    var nu1 : Rigidbody;
    var nu2 : Rigidbody; 
    nu1 = Instantiate(projectile, transform.position, transform.rotation);
 
    // Add force to the cloned object in the object's forward direction
    nu1.velocity = transform.TransformDirection(Vector3(0,0,speed));


	
	Destroy(nu1.gameObject, 3);
    }
}