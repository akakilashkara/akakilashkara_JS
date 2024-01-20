function lab2_task7(a, b){
    const randomNumber = Math.floor(Math.random() * (b - a) + a);

    document.getElementById("random").innerText += ` ${randomNumber}`
}

lab2_task7(10, 30)



function lab2_task11() {
    const weekDays = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი", "კვირა" ];
    const random = Math.floor(Math.random() * weekDays.length);
    return weekDays[random];
}

const randomDay = lab2_task11();

document.write(randomDay)


