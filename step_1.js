const data_collection = [];
const page_1_result = [];

const Left_section_steps = {
	1: "Your Info",
	2: "select plan",
	3: "add-ons",
	4: "summary",
};
// steps.stringify
const leftSection = document.getElementById("leftSectionItems");

const rightSection = document.getElementById("rightSection");
const footer = document.getElementById("footer");

const plans_1 = [
	{
		Monthly: {
			Arcade: 9,
			Advanced: 12,
			Pro: 15,
		},
		Yearly: {
			Arcade: 90,
			Advanced: 120,
			Pro: 150,
		},
	},
];

const plans_add_ons = [
	{
		Monthly: {
			"Online service": 1,
			"Larger Storage": 2,
			"Customizable profile": 2,
		},
		Yearly: {
			"Online service": 10,
			"Larger Storage": 20,
			"Customizable profile": 20,
		},
	},
];

// STEP1 PAGE

const website = async () => {
	const rightSectionHtml_page_1 = `<div id="page_1"><div id ="heading">
    <p id ="head">Personal info</p>
    <p id="head_caption">Please provide your name, email address, and phone number.</p>
</div>
<div id="section">
    <label for="userName" class="label">Name <span class="err" id="err_1"></span></label>
    <input type="text" name="userName" placeholder="a-z,A-Z and spaces are allowed." class="sectionItems" id="userName">
    <label for="emailAddress" class="label">Email Address <span class="err" id="err_2"></span></label>
    <input type="text" name="email" class="sectionItems" id="emailAddress">
    <label for="phNumber" class="label" >Phone Number <span class="err" id="err_3"></span></label>
    <input type="text" name="phNumber" placeholder="e.g. +1 234 567 890" class="sectionItems" id="phNumber">
</div>`;
	const rightSectionHtml_page_1_btn = `<button id="btn_1_page_1">Next Step</button></div>`;
	const loadPage = async () => {
		for (const [key, value] of Object.entries(Left_section_steps)) {
			const leftSectionHtml = `<div class="first">
        <span class="number" id ="num_${key}">${key}</span>
        <span id="right">
            <p class="para1" >STEP ${key}</p>
            <p class="para2">${value}</p>
        </span>
    </div>
    `;
			// console.log(leftSectionHtml);
			leftSection.insertAdjacentHTML("beforeend", leftSectionHtml);
		}

		rightSection.insertAdjacentHTML("afterbegin", rightSectionHtml_page_1);
		footer.insertAdjacentHTML("afterbegin", rightSectionHtml_page_1_btn);
		await page_1_to_page_2();
	};

	const page_1_to_page_2 = async () => {
		// footer.insertAdjacentHTML("afterbegin",rightSectionHtml_page_1_btn )
		const btn1 = document.getElementById("btn_1_page_1");
		const step2 = async () => {
			// PROMISE_1 USERNAME
			const promise_1 = new Promise((resolve, reject) => {
				const check_1 = async () => {
					const userName = document.getElementById("userName").value;

					const err_1 = document.getElementById("err_1");

					const userCorrect = /^[a-zA-Z ]+$/;
					// console.log(userName);
					if ((await userName) === "") {
						err_1.innerHTML = "Please fill this section.";
						reject("rejected Username.");
					} else {
						err_1.innerHTML = "";
						if (userName.length < 20) {
							// console.log("valid20");
							if (userName.match(userCorrect)) {
								resolve("resolved Username.");
								// console.log("accept");
							} else {
								err_1.innerHTML = "Numeric expressions are not accept.";
								reject("rejected Username.");
							}
						} else {
							err_1.innerHTML = "Enter only 20 characters.";
							reject("rejected Username.");
						}
					}
				};
				check_1();
			});

			// PROMISE_2_EMAIL_ADDRESS

			const promise_2 = new Promise((resolve, reject) => {
				const check_2 = async () => {
					const emailAddress = document.getElementById("emailAddress").value;

					const err_2 = document.getElementById("err_2");

					if (emailAddress == "") {
						err_2.innerHTML = "Please fill this section.";
						reject("rejected Email address.");
					} else {
						if (
							emailAddress.includes("@gmail.com") ||
							emailAddress.includes("@email.com")
						) {
							err_2.innerHTML = "";
							resolve("resolved Email address.");
						} else {
							err_2.innerHTML = "Enter a valid Email Address.";
							reject("rejected Email address.");
						}
					}
				};
				check_2();
			});

			// PROMISE_3_PHONE_NUMBER

			const promise_3 = new Promise((resolve, reject) => {
				const check_3 = async () => {
					const phNumber = document.getElementById("phNumber").value;

					const err_3 = document.getElementById("err_3");

					if (phNumber == "") {
						err_3.innerHTML = "Please fill this section.";
						reject("rejected");
					} else {
						console.log(phNumber.length);
						if ((await phNumber.length) < 11) {
							// console.log("true number");
							if ((await phNumber.length) < 10) {
								err_3.innerHTML = "Enter a valid Phone Number.";
								reject("rejected");
							} else {
								err_3.innerHTML = "";
								resolve("resolved");
							}
						} else {
							err_3.innerHTML = "Enter a valid Phone Number.";
							reject("rejected");
						}
					}
				};

				check_3();
			});

			// ALL PROMISES RESULT

			// const result_1 = await promise_1
			// 	.then((value) => {
			// 		return value;
			// 	})
			// 	.catch((err) => {
			// 		return err;
			// 	});
			// console.log(result_1);

			// let result_2 = await promise_2
			// 	.then((value) => {
			// 		return value;
			// 	})
			// 	.catch((err) => {
			// 		return err;
			// 	});
			// console.log(result_2);

			// let result_3 = await promise_3.then((value)=>{
			//     return value;
			// }).catch((err)=>{
			//     return err;
			// })
			// console.log(result_3)

			// check_1();
			//    console.log(check_2)
			// if(check_1() ==true){
			//     console.log("complete")
			// }else{
			//     console.log("incomplete")
			// };

			const all_promise = Promise.all([promise_1, promise_2, promise_3]);
			const result_all_promise = await all_promise
				.then((value) => {
					return "complete";
				})
				.catch((err) => {
					return "incomplete";
				});

			if (result_all_promise == "complete") {
				const remove_page_1 = document.getElementById("page_1");
				const userName = document.getElementById("userName").value;
				const emailAddress = document.getElementById("emailAddress").value;
				const phNumber = document.getElementById("phNumber").value;

				const page_1_data = [
					{
						Username: `${userName}`,
						Email_address: `${emailAddress}`,
						Phone_Number: `${phNumber}`,
					},
				];

				data_collection.push(page_1_data);
				remove_page_1.remove(); //removing Page 1

				btn1.removeEventListener("click", step2); //Removing_page1 btn1.addEventListener("click", step2)
				// PAGE_1_ALL_DATA
				btn1.remove();
				await page_2();
			} else {
			}
			// console.log(typeof result_all_promise,result_all_promise)
			page_1_result.push(result_all_promise);
			return "result_all_promise";
		};

		btn1.addEventListener("click", step2);
		const phNumCorrect = /^[a-zA-Z !@#$%^&*()_+=-]+$/;
		const phNumber = document.getElementById("phNumber");
		const phNumberCheck = (input) => {
			phNumber.value = phNumber.value.replace(phNumCorrect, "");
		};
		phNumber.addEventListener("keyup", phNumberCheck);
	};

	const page_2 = async () => {
		const num1 = document.getElementById("num_1");
		num1.style.cssText = "color: white; background-color:transparent";
		const num2 = document.getElementById("num_2");
		num2.style.cssText =
			"color: var(--heading_color); background-color: var(--sec_color); ";

		// PAGE_2_HTML
		const rightSectionHtml_page_2 = `<div id="page_2">
			<div id="heading">
					<p id="head">Select Your Plan</p>
					<p id="head_caption">
						You have the option of monthly or yearly billing.
					</p>
				</div>
				<div id="page_2_middle_section">
					<div id = "plan_package">
					
					<div id = "monthly_plan_package">
					<input type="radio" name="checkbox" value="" id="checkbox1" checked />
					<label for="checkbox1">
						<div id="container_1">
							<div class="page_2_card_bottom_section">
								<p class="page_2_p1">${Object.keys(plans_1[0].Monthly)[0]}</p>
								<p class="page_2_p2">$${Object.values(plans_1[0].Monthly)[0]}/mo</p>
							</div>
						</div>
					</label>
					<input type="radio" name="checkbox" value="" id="checkbox2" />
					<label for="checkbox2">
						<div id="container_2">
							<div class="page_2_card_bottom_section">
								<p class="page_2_p1">${Object.keys(plans_1[0].Monthly)[1]}</p>
								<p class="page_2_p2">$${Object.values(plans_1[0].Monthly)[1]}/mo</p>
							</div>
						</div>
					</label>
					<input type="radio" name="checkbox" value="" id="checkbox3" />
					<label for="checkbox3">
						<div id="container_3">
							<div class="page_2_card_bottom_section">
								<p class="page_2_p1">${Object.keys(plans_1[0].Monthly)[2]}</p>
								<p class="page_2_p2">$${Object.values(plans_1[0].Monthly)[2]}/mo</p>
							</div>
						</div>
					</label>
					</div>

					</div>
				</div>
				<div id = "toggle_btn">
					 <label for="monthly_yearly_btn" id="monthly_btn">monthly
					 </label>
					 <input type="checkbox" name="checkbox_toggle_btn" id="monthly_yearly_btn"  >
				   <label for="monthly_yearly_btn" id="yearly_btn">yearly
					 </label>
				   </div>
	
	</div>`;
		const rightSectionHtml_page_2_btn = `<button id="btn_1_page_2">Go Back</button> 
	<button id="btn_2_page_2">Next Step</button> `;
		rightSection.insertAdjacentHTML("afterbegin", rightSectionHtml_page_2);
		footer.insertAdjacentHTML("afterbegin", rightSectionHtml_page_2_btn);
		await add_page_2_toggle_btn_func_();
	};
	const add_page_2_toggle_btn_func_ = async () => {
		const monthly = document.getElementById("monthly_btn");
		const yearly = document.getElementById("yearly_btn");
		const toggle_btn_2_page_2 = document.getElementById("monthly_yearly_btn");
		const plan_package = document.getElementById("plan_package");

		const monthly_plan_package = `<div id = "monthly_plan_package">
	 <input type="radio" name="checkbox" value="" id="checkbox1" checked />
	 <label for="checkbox1">
		 <div id="container_1">
			 <div class="page_2_card_bottom_section">
				 <p class="page_2_p1">${Object.keys(plans_1[0].Monthly)[0]}</p>
				 <p class="page_2_p2">$${Object.values(plans_1[0].Monthly)[0]}/mo</p>
			 </div>
		 </div>
	 </label>
	 <input type="radio" name="checkbox" value="" id="checkbox2" />
	 <label for="checkbox2">
		 <div id="container_2">
			 <div class="page_2_card_bottom_section">
				 <p class="page_2_p1">${Object.keys(plans_1[0].Monthly)[1]}</p>
				 <p class="page_2_p2">$${Object.values(plans_1[0].Monthly)[1]}/mo</p>
			 </div>
		 </div>
	 </label>
	 <input type="radio" name="checkbox" value="" id="checkbox3" />
	 <label for="checkbox3">
		 <div id="container_3">
			 <div class="page_2_card_bottom_section">
				 <p class="page_2_p1">${Object.keys(plans_1[0].Monthly)[2]}</p>
				 <p class="page_2_p2">$${Object.values(plans_1[0].Monthly)[2]}/mo</p>
			 </div>
		 </div>
	 </label>
	 </div>`;

		const yearly_plan_package = `<div id="yearly_plan_package">
					<input type="radio" name="checkbox" value="" id="checkbox1" checked />
			<label for="checkbox1">
				<div id="container_1">
					<div class="page_2_card_bottom_section">
						<p class="page_2_p1">${Object.keys(plans_1[0].Yearly)[0]}</p>
						<p class="page_2_p2">$${Object.values(plans_1[0].Yearly)[0]}/yr</p>
						<p class="page_2_p3">2 months free</p>

					</div>
				</div>
			</label>
			<input type="radio" name="checkbox" value="" id="checkbox2" />
			<label for="checkbox2">
				<div id="container_2">
					<div class="page_2_card_bottom_section">
						<p class="page_2_p1">${Object.keys(plans_1[0].Yearly)[1]}</p>
						<p class="page_2_p2">$${Object.values(plans_1[0].Yearly)[1]}/yr</p>
						<p class="page_2_p3">2 months free</p>
					</div>
				</div>
			</label>
			<input type="radio" name="checkbox" value="" id="checkbox3" />
			<label for="checkbox3">
				<div id="container_3">
					<div class="page_2_card_bottom_section">
						<p class="page_2_p1">${Object.keys(plans_1[0].Yearly)[2]}</p>
						<p class="page_2_p2">$${Object.values(plans_1[0].Yearly)[2]}/yr</p>
						<p class="page_2_p3">2 months free</p>
					</div>
				</div>
			</label>
				</div>`;

		console.log("page2loaded..");
		const toggleBtn = () => {
			const toggleBtnValue = toggle_btn_2_page_2.checked;
			if (toggleBtnValue == true) {
				const monthly_plan_package_remove = document.getElementById(
					"monthly_plan_package"
				);
				monthly_plan_package_remove.remove();

				monthly.style.cssText = "color:var(--placeholder_color)";
				yearly.style.cssText = "color:var(--heading_color)";
				console.log("yes");
				plan_package.insertAdjacentHTML("afterbegin", yearly_plan_package);
			} else if (toggleBtnValue == false) {
				const yearly_plan_package_remove = document.getElementById(
					"yearly_plan_package"
				);
				yearly_plan_package_remove.remove();
				monthly.style.cssText = "color:var(--heading_color)";
				yearly.style.cssText = "color:var(--placeholder_color)";
				plan_package.insertAdjacentHTML("afterbegin", monthly_plan_package);
			} else {
				console.log("error in toggle btn.");
			}
		};
		toggle_btn_2_page_2.addEventListener("click", toggleBtn);
		await page_2_to_page_1();
		await page_2_to_page_3();
	};

	const page_2_to_page_1 = async () => {
		const page_2_go_back_btn = document.getElementById("btn_1_page_2");
		const remove_page_2 = async () => {
			const page_2_go_back_btn = document.getElementById("btn_1_page_2");
			const page_2_next_btn = document.getElementById("btn_2_page_2");
			const remove_page_2 = document.getElementById("page_2");
			remove_page_2.remove();
			page_2_go_back_btn.remove();
			page_2_next_btn.remove();

			rightSection.insertAdjacentHTML("afterbegin", rightSectionHtml_page_1);
			footer.insertAdjacentHTML("afterbegin", rightSectionHtml_page_1_btn);
		};
		const page_1 = async () => {
			const num2 = document.getElementById("num_2");
			num2.style.cssText = "color: white; background-color:transparent";
			const num1 = document.getElementById("num_1");
			num1.style.cssText =
				"color: var(--heading_color); background-color: var(--sec_color); ";
			data_collection.pop([0]);
			await remove_page_2();
			await page_1_to_page_2();
			console.log("goback");
		};
		page_2_go_back_btn.addEventListener("click", page_1);
		console.log("page2topage1");
		// await page_2_to_page_3();
	};

	const page_2_to_page_3 = async () => {
		const page_2_go_back_btn = document.getElementById("btn_1_page_2");
		const page_2_next_btn = document.getElementById("btn_2_page_2");

		page_2_next_btn.addEventListener("click", step_3);
	};

	const step_3 = async () => {
		await plan_selected();
		await remove_page_2();

		await page_3_add_ups();
		await page_3_checkbox();
	};

	const remove_page_2 = async () => {
		const remove_page_2 = document.getElementById("page_2");
		remove_page_2.remove();
		const page_2_go_back_btn = document.getElementById("btn_1_page_2");
		const page_2_next_btn = document.getElementById("btn_2_page_2");
		page_2_next_btn.removeEventListener("click", step_3);
		page_2_next_btn.remove();
		page_2_go_back_btn.remove();
	};

	const plan_selected = async () => {
		const checkbox1 = document.getElementById("checkbox1");
		const checkbox2 = document.getElementById("checkbox2");
		const checkbox3 = document.getElementById("checkbox3");
		const checkbox4 = document.getElementById("checkbox4");
		const checkbox5 = document.getElementById("checkbox5");
		const checkbox6 = document.getElementById("checkbox6");
		const toggle_btn_2_page_2 = document.getElementById("monthly_yearly_btn");
		const toggleBtnValue = toggle_btn_2_page_2.checked;
		console.log("step_3");
		const plans = {
			1: "Arcade",
			2: "Advanced",
			3: "Pro",
		};

		if (toggleBtnValue == true) {
			data_collection.push(Object.keys(plans_1[0])[1]);
			if ((await checkbox1.checked) == true) {
				data_collection.push(Object.entries(plans_1[0].Yearly)[0]);
				console.log(data_collection);
			} else if ((await checkbox2.checked) == true) {
				data_collection.push(Object.entries(plans_1[0].Yearly)[1]);
			} else if (checkbox3.checked == true) {
				data_collection.push(Object.entries(plans_1[0].Yearly)[2]);
			}
		} else if (toggleBtnValue == false) {
			data_collection.push(Object.keys(plans_1[0])[0]);
			if ((await checkbox1.checked) == true) {
				data_collection.push(Object.entries(plans_1[0].Monthly)[0]);
				console.log(data_collection);
			} else if ((await checkbox2.checked) == true) {
				data_collection.push(Object.entries(plans_1[0].Monthly)[1]);
			} else if (checkbox3.checked == true) {
				data_collection.push(Object.entries(plans_1[0].Monthly)[2]);
			}
		}

		const num2 = document.getElementById("num_2");
		num2.style.cssText = "color: white; background-color:transparent";
		const num3 = document.getElementById("num_3");
		num3.style.cssText =
			"color: var(--heading_color); background-color: var(--sec_color); ";
	};
	const rightSectionHtml_page_3 = `<div id="page_3">
	<div id="heading">
			<p id="head">Pick add-ons</p>
			<p id="head_caption">
				Add-ons help enhance your gaming experience.
			</p>
		</div>
		<div id="page_3_middle_section">
			
		  </div>
		

</div> `;
	const rightSectionHtml_page_3_btn = `<button id="btn_1_page_3">Go Back</button> 
 <button id="btn_2_page_3">Next Step</button> `;
	const page_3_add_ups = async () => {
		rightSection.insertAdjacentHTML("afterbegin", rightSectionHtml_page_3);
		footer.insertAdjacentHTML("afterbegin", rightSectionHtml_page_3_btn);
	};

	const page_3_checkbox = async () => {
		const page_3_monthly_or_yearly = data_collection[1];
		console.log(data_collection[1]);
		const adding_page_3_middle_section = async () => {
			console.log(data_collection[2][1]);
			const page_3_middle_section = document.getElementById(
				"page_3_middle_section"
			);

			const page_3_middle_section_monthly = `<div id="add_ons">
	 <label for="add_ons_1" class="add-ons_div" id="add_ons_1_label">
	   <input type="checkbox" name="add_ons_1" class="checkbox_input" id="add_ons_1">
	   <div class="add_ons_left_section" id="add_ons_left_section_1">
		 <p class="add_ons_plan_head">${Object.keys(plans_add_ons[0].Monthly)[0]}</p>
		 <p class="add_ons_plan_head_caption">Access to multiplayer games</p>
	   </div>
	   <div class="add_ons_right_section" id="add_ons_right_section_1">
		 <p id="amount1">+$${Object.values(plans_add_ons[0].Monthly)[0]}/mo</p>
	   </div>
	 </label>

	 <label for="add_ons_2" class="add-ons_div" id="add_ons_2_label">
	   <input type="checkbox" name="add_ons_2" class="checkbox_input" id="add_ons_2">
	   <div class="add_ons_left_section" id="add_ons_left_section_2">
		 <p class="add_ons_plan_head">${Object.keys(plans_add_ons[0].Monthly)[1]}</p>
		 <p class="add_ons_plan_head_caption">Extra 1TB of cloud save</p>
	   </div>
	   <div class="add_ons_right_section" id="add_ons_right_section_2">
		 <p id="amount2">+$${Object.values(plans_add_ons[0].Monthly)[1]}/mo</p>
	   </div>
	 </label>

	 <label for="add_ons_3" class="add-ons_div" id="add_ons_3_label">
	   <input type="checkbox" name="add_ons_3" class="checkbox_input" id="add_ons_3">
	   <div class="add_ons_left_section" id="add_ons_left_section_1">
		 <p class="add_ons_plan_head">${Object.keys(plans_add_ons[0].Monthly)[2]}</p>
		 <p class="add_ons_plan_head_caption">Custom theme on you profile</p>
	   </div>
	   <div class="add_ons_right_section" id="add_ons_right_section_1">
		 <p id="amount1">+$${Object.values(plans_add_ons[0].Monthly)[2]}/mo</p>
	   </div>
	 </label>
   </div>`;

			const page_3_middle_section_yearly = `<div id="add_ons">
   <label for="add_ons_1" class="add-ons_div" id="add_ons_1_label">
	 <input type="checkbox" name="add_ons_1" class="checkbox_input" id="add_ons_1" >
	 <div class="add_ons_left_section" id="add_ons_left_section_1">
	   <p class="add_ons_plan_head">${Object.keys(plans_add_ons[0].Yearly)[0]}</p>
	   <p class="add_ons_plan_head_caption">Access to multiplayer games</p>
	 </div>
	 <div class="add_ons_right_section" id="add_ons_right_section_1">
	   <p id="amount1">+$${Object.values(plans_add_ons[0].Yearly)[0]}/mo</p>
	 </div>
   </label>

   <label for="add_ons_2" class="add-ons_div" id="add_ons_2_label">
	 <input type="checkbox" name="add_ons_2" class="checkbox_input" id="add_ons_2">
	 <div class="add_ons_left_section" id="add_ons_left_section_2">
	   <p class="add_ons_plan_head">${Object.keys(plans_add_ons[0].Yearly)[1]}</p>
	   <p class="add_ons_plan_head_caption">Extra 1TB of cloud save</p>
	 </div>
	 <div class="add_ons_right_section" id="add_ons_right_section_2">
	   <p id="amount2">+$${Object.values(plans_add_ons[0].Yearly)[1]}/mo</p>
	 </div>
   </label>

   <label for="add_ons_3" class="add-ons_div" id="add_ons_3_label">
	 <input type="checkbox" name="add_ons_3" class="checkbox_input" id="add_ons_3">
	 <div class="add_ons_left_section" id="add_ons_left_section_1">
	   <p class="add_ons_plan_head">${Object.keys(plans_add_ons[0].Yearly)[2]}</p>
	   <p class="add_ons_plan_head_caption">Custom theme on you profile</p>
	 </div>
	 <div class="add_ons_right_section" id="add_ons_right_section_1">
	   <p id="amount1">+$20/mo</p>
	 </div>
   </label>
 </div>`;

			if (page_3_monthly_or_yearly == "Monthly") {
				page_3_middle_section.insertAdjacentHTML(
					"afterbegin",
					page_3_middle_section_monthly
				);
			} else if (page_3_monthly_or_yearly == "Yearly") {
				page_3_middle_section.insertAdjacentHTML(
					"afterbegin",
					page_3_middle_section_yearly
				);
			} else {
			}
			await page_3_checkbox_func();
		};

		const page_3_checkbox_func = async () => {
			const checked1 = document.getElementById("add_ons_1");
			const checked2 = document.getElementById("add_ons_2");
			const checked3 = document.getElementById("add_ons_3");
			const page_3_go_back_btn = document.getElementById("btn_1_page_3");
			const page_3_next_btn = document.getElementById("btn_2_page_3");

			const page_3_checkbox1 = async () => {
				const add_ons_selected = document.getElementById("add_ons_1_label");

				if (checked1.checked == true) {
					add_ons_selected.style.cssText =
						"background-color : var(--card-checked_color) ; border: 0.1rem solid var(--card-checked_border_color) ";
				} else if (checked1.checked == false) {
					add_ons_selected.style.cssText = "background-color : white);";
				} else {
				}
			};
			const page_3_checkbox2 = async () => {
				const add_ons_selected = document.getElementById("add_ons_2_label");

				if (checked2.checked == true) {
					add_ons_selected.style.cssText =
						"background-color : var(--card-checked_color) ; border: 0.1rem solid var(--card-checked_border_color) ";
				} else if (checked2.checked == false) {
					add_ons_selected.style.cssText = "background-color : white);";
				} else {
				}
			};
			const page_3_checkbox3 = async () => {
				const add_ons_selected = document.getElementById("add_ons_3_label");

				if (checked3.checked == true) {
					add_ons_selected.style.cssText =
						"background-color : var(--card-checked_color) ; border: 0.1rem solid var(--card-checked_border_color) ";
				} else if (checked3.checked == false) {
					add_ons_selected.style.cssText = "background-color : white);";
				} else {
				}
			};

			checked1.addEventListener("click", page_3_checkbox1);
			checked2.addEventListener("click", page_3_checkbox2);
			checked3.addEventListener("click", page_3_checkbox3);
			page_3_go_back_btn.addEventListener("click", page_3_to_page_2);
			page_3_next_btn.addEventListener("click", page_3_data);
		};

		await adding_page_3_middle_section();
	};
	const page_3_to_page_2 = async () => {
		const remove_page_3 = document.getElementById("page_3");
		remove_page_3.remove();
		const num3 = document.getElementById("num_3");
		num3.style.cssText = "color: white; background-color:transparent";
		const num2 = document.getElementById("num_2");
		num2.style.cssText =
			"color: var(--heading_color); background-color: var(--sec_color); ";
		data_collection.pop();
		data_collection.pop();
		const page_3_go_back_btn = document.getElementById("btn_1_page_3");
		const page_3_next_btn = document.getElementById("btn_2_page_3");
		page_3_next_btn.remove();
		page_3_go_back_btn.remove();
		await page_2();
		console.log(data_collection);
	};

	const page_3_data = async () => {
		const checked1 = document.getElementById("add_ons_1");
		const checked2 = document.getElementById("add_ons_2");
		const checked3 = document.getElementById("add_ons_3");

		const add_ons = [
			{
				"Online service": 1,
				"Larger storage": 2,
				"Customizable profile": 2,
			},
		];

		//object converting to an array
		const add_ons_array = Object.entries(add_ons[0]);
		const page_3_checkbox1 = async () => {
			if (data_collection[1] == "Monthly") {
				if (checked1.checked == true) {
					data_collection.push(Object.entries(plans_add_ons[0].Monthly)[0]);
				} else {
				}
			} else if (data_collection[1] == "Yearly") {
				if (checked1.checked == true) {
					data_collection.push(Object.entries(plans_add_ons[0].Yearly)[0]);
				} else {
				}
			} else {
			}
		};
		const page_3_checkbox2 = async () => {
			if (data_collection[1] == "Monthly") {
				if (checked2.checked == true) {
					data_collection.push(Object.entries(plans_add_ons[0].Monthly)[1]);
				} else {
				}
			} else if (data_collection[1] == "Yearly") {
				if (checked2.checked == true) {
					data_collection.push(Object.entries(plans_add_ons[0].Yearly)[1]);
				} else {
				}
			} else {
			}
		};
		const page_3_checkbox3 = async () => {
			if (data_collection[1] == "Monthly") {
				if (checked3.checked == true) {
					data_collection.push(Object.entries(plans_add_ons[0].Monthly)[2]);
				} else {
				}
			} else if (data_collection[1] == "Yearly") {
				if (checked3.checked == true) {
					data_collection.push(Object.entries(plans_add_ons[0].Yearly)[2]);
				} else {
				}
			} else {
			}
		};
		await page_3_checkbox1();
		await page_3_checkbox2();
		await page_3_checkbox3();
		await page_3_to_page_4();
	};
	const page_3_to_page_4 = async () => {
		const page_3_go_back_btn = document.getElementById("btn_1_page_3");
		const page_3_next_btn = document.getElementById("btn_2_page_3");
		page_3_go_back_btn.removeEventListener("click", page_3_to_page_2);
		page_3_next_btn.removeEventListener("click", page_3_data);
		const remove_page_3 = document.getElementById("page_3");
		remove_page_3.remove();
		page_3_next_btn.remove();
		page_3_go_back_btn.remove();
		const num3 = document.getElementById("num_3");
		num3.style.cssText = "color: white; background-color:transparent";
		const num4 = document.getElementById("num_4");
		num4.style.cssText =
			"color: var(--heading_color); background-color: var(--sec_color); ";

		console.log(data_collection);
		await Page_4();
	};

	const Page_4 = async () => {
		const rightSectionHtml_page_4 = `<div id="page_4">
		<div id="heading">
			<p id="head">Finishing up</p>
			<p id="head_caption">
				Double-check everything looks OK before confirming.
			</p>
		</div>
		<div id="page_4_middle_section">
		<div id="plan_section">
		<div id="plan_top_section">
		<div id="plan_top_section_left">
			<p id="planName">${data_collection[2][0]} (${data_collection[1]})</p>
			<button id="change_btn">Change</button>
		</div>
		<div id="plan_top_section_right">$${data_collection[2][1]}/mo</div>
	</div>	
	
	<div id="plan_total_section">
						
					</div>
	
		</div>
	</div>
	
	
	</div>`;
		const rightSectionHtml_page_4_btn = `<button id="btn_1_page_4">Go Back</button>
	<button id="btn_2_page_4">Confirm</button>`;
		rightSection.insertAdjacentHTML("afterbegin", rightSectionHtml_page_4);
		footer.insertAdjacentHTML("afterbegin", rightSectionHtml_page_4_btn);
		await adding_page_4_middle_section();
	};

	const adding_page_4_middle_section = async () => {
		const plan_top_section = document.getElementById("plan_top_section");
		const plan_bottom_section_total =
			document.getElementById("plan_total_section");
		const btn_1_page_4 = document.getElementById("btn_1_page_4");
		const btn_2_page_4 = document.getElementById("btn_2_page_4");

		for (let num = 3; num < data_collection.length; num++) {
			let plan_bottom_section_html = `
			<div id="plan_bottom_section">
			
			<p class="plan_add_ons">
			${data_collection[num][0]}
		</p>
		
		
		<p class="plan_add_ons_amt">
			+$${data_collection[num][1]}/mo
		</p>

		</div>
		`;
			console.log(plan_bottom_section_html);
			plan_top_section.insertAdjacentHTML("afterend", plan_bottom_section_html);
		}

		let sum = data_collection[2][1];

		for (let num = 3; num < data_collection.length; num++) {
			let a = data_collection[num][1];
			console.log(a);
			sum += a;
		}
		const plan_bottom_section_total_html = `
		
		
		<p id="total">
		Total(per month)
	</p>
	
	
	<p id="total_amt">
		+$${sum}/mo
	</p>`;

		plan_bottom_section_total.insertAdjacentHTML(
			"afterbegin",
			plan_bottom_section_total_html
		);
		btn_1_page_4.addEventListener("click", page_4_to_3);
		btn_2_page_4.addEventListener("click", page_thankyou);
	};

	const page_4_to_3 = async () => {
		const btn_1_page_4 = document.getElementById("btn_1_page_4");
		const btn_2_page_4 = document.getElementById("btn_2_page_4");
		const num4 = document.getElementById("num_4");
		num4.style.cssText = "color: white; background-color:transparent";
		const num3 = document.getElementById("num_3");
		num3.style.cssText =
			"color: var(--heading_color); background-color: var(--sec_color); ";

		btn_1_page_4.removeEventListener("click", page_4_to_3);
		btn_2_page_4.removeEventListener("click", page_thankyou);
		const page_4 = document.getElementById("page_4");
		page_4.remove();
		btn_1_page_4.remove();
		btn_2_page_4.remove();
		for (let num = data_collection.length; num > 3; num--) {
			data_collection.pop();
		}
		await page_3_add_ups();
		await page_3_checkbox();
	};

	const page_thankyou = async () => {
		const btn_1_page_4 = document.getElementById("btn_1_page_4");
		const btn_2_page_4 = document.getElementById("btn_2_page_4");
		btn_1_page_4.removeEventListener("click", page_4_to_3);
		btn_2_page_4.removeEventListener("click", page_thankyou);
		const page_4 = document.getElementById("page_4");
		page_4.remove();
		btn_1_page_4.remove();
		btn_2_page_4.remove();
		const PAGE_5_HTML = `<div id="page_5">
		<div id="thankyou"><img src="/assets/images/icon-thank-you.svg" alt="thankyou_img" id="thankyou_img">
		<p id="thankyou_head">Thank you!</p>
		<p id="thankyou_head_caption">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
	</div>

		</div>`;
		rightSection.insertAdjacentHTML("afterbegin", PAGE_5_HTML);
	};

	await loadPage();
};

website();

// const checked1 = document.getElementById("add_ons_1")
// const checked2 = document.getElementById("add_ons_2")
// const checked3 = document.getElementById("add_ons_3")

// const page_3_checkbox1 = async ()=>{
//   const add_ons_selected = document.getElementById("add_ons_1_label")

// if(checked1.checked == true){
//   add_ons_selected.style.cssText = "background-color : var(--card-checked_color) ; border: 0.1rem solid var(--card-checked_border_color) "
// }
// else if(checked1.checked == false){
//    add_ons_selected.style.cssText = "background-color : white);"
// }
//   else{}
// }
// const page_3_checkbox2 = async ()=>{
//   const add_ons_selected = document.getElementById("add_ons_2_label")

// if(checked2.checked == true){
//   add_ons_selected.style.cssText = "background-color : var(--card-checked_color) ; border: 0.1rem solid var(--card-checked_border_color) "
// }
// else if(checked2.checked == false){
//    add_ons_selected.style.cssText = "background-color : white);"
// }
//   else{}
// }
// const page_3_checkbox3 = async ()=>{
//   const add_ons_selected = document.getElementById("add_ons_3_label")

// if(checked3.checked == true){
//   add_ons_selected.style.cssText = "background-color : var(--card-checked_color) ; border: 0.1rem solid var(--card-checked_border_color) "
// }
// else if(checked3.checked == false){
//    add_ons_selected.style.cssText = "background-color : white);"
// }
//   else{}
// }

// checked1.addEventListener("click",page_3_checkbox1)
// checked2.addEventListener("click",page_3_checkbox2)
// checked3.addEventListener("click",page_3_checkbox3)
