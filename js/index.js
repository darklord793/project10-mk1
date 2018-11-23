const a = prompt('Enter A');
const b = prompt('Enter B');
const c = prompt('Enter C');
let result = solveQuadrEq(a, b, c);
	alert('The result of your calculations is' + result);
    
function solveQuadrEq(a, b, c) {
	const d =  Math.sqrt(b * b - 4 * a * c); 
	if (d > 0) {
		const x1 = (-b + d) / (2 * a);
		const x2 = (-b - d) / (2 * a);
		return "Equation has 2 roots : X1=" + x1 + ", X2=" + x2 + " discriminator(d)=" + d;
	} else if (d === 0) {
	 	const x = -b / (2 * a);
		return "Equation has 1 root: x=" + x + " discriminator(d)=" + d;}
}