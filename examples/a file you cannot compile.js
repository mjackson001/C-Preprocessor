/*

This file cannot be compiled and produces an error


Sources at https://github.com/ParksProjets/C-Preprocessor
License GPLv2

*/


#include "no file.js"

#define ADD_2(v) v+2


#ifdef OK
	
	console.log('It doesn\'t work !');

#endif


console.log(ADD_2(PI, 3));


console.log(':(');
