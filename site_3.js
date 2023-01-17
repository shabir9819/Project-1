const plans_1 = [{
	Monthly:{
		Arcade: 9,
		Advanced: 12,
		Pro: 15
	},
	Yearly:{
		Arcade: 90,
		Advanced: 120,
		Pro: 150
	}
}];

console.log(Object.entries(plans_1[0].Monthly)[0])

const plans_add_ons = [{
	Monthly:{
		"Online service": 1,
		"Larger Storage": 2,
		"Customizable profile": 2
	},
	Yearly:{
		"Online service": 10,
		"Larger Storage": 20,
		"Customizable profile": 20
	}
}];
console.log(Object.values(plans_add_ons[0].Monthly)[1])
console.log(Object.entries(plans_add_ons[0].Yearly)[1])
console.log(plans_add_ons[0].Monthly)
console.log(typeof plans_add_ons)


for (let i = 0; i<=(Object.entries(plans_add_ons[0].Monthly)).length; i++){

	let a = i;
	let b = `checked${a}`
	console.log(b)
}


// for(let num = 3 ; num < data_collection.length ; num++){
// 	let plan_bottom_section_html = `<p class="plan_add_ons">
// 	${data_collection[num][0]}
// </p>


// <p class="plan_add_ons_amt">
// 	+$${data_collection[num][1]}/mo
// </p>
// `
// console.log(plan_bottom_section_html)

// }


const sum1 = async () =>{
	let sum = 0;
	
	for(let num = 0; num < 3 ; num++){
		let a = Object.entries(plans_add_ons[0].Monthly)[num][1];
	console.log(a)
	sum += a;
		
}
return sum;

	}

console.log(sum1())


const a = [[ "Advanced", 12 ],

[ "Online service", 1 ],

 [ "Larger Storage", 2 ],

 [ "Customizable profile", 2 ]]
for(let num = data_collection.length; num > 3; num--){
	console.log("hello");
	data_collection.pop();
}
console.log(a)