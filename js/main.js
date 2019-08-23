class Restaurant {
    constructor(name) {
        this.name = name,
        this.menu = [],

        // this.menu = [
        //     {
        //         name: "burger",
        //         price: 450
        //     }
        // ]
        this.reserveList = []
        this.customerList = []
        this.salesList = []
    }
    greeting() {
        console.log(`ようこそ、${this.name}へ！`)
    }
    showMenu() {
        console.log(this.menu)
    }
    addMenu(addedName, addedPrice) {
        this.menu.push(
            {
                name: addedName,
                price: addedPrice
            }
        )
    }
    addreserve(reservedName, numberOfPeople) {
        this.reserveList.push(
            {
                name: reservedName,
                number: numberOfPeople
            }
        )
        // this.customerList.push(
        //     {
        //         name: reservedName
        //     }
        // )
        console.log(this.reserveList)
    }
    allSales() {
        var sales = 0
        for (var i=0; i < this.salesList.length;i++) {
            sales += this.salesList[i].price
        }
        console.log(sales)
    }
    salesAnalytics(year, month, day) {
        var yearSales = 0
        var monthSales = 0
        var daySales = 0
        console.log(this.salesList[0])
        console.log(this.salesList[0].name)
        console.log(this.salesList[0].name.date)
        for (var i=0; i < this.salesList.length; i++) {
            if (this.salesList[i].name.date.year == year) {
                yearSales += this.salesList[i].checkedPrice
                if (this.salesList[i].name.date.month == month) {
                    monthSales += this.salesList[i].checkedPrice
                    if (this.salesList[i].name.date.day == day) {
                        daySales += this.salesList[i].checkedPrice
                    }
                }
            }
            
        }
        console.log(year + "の売上は" + yearSales + "円です")
        console.log(month + "の売上は" + monthSales + "円です")
        console.log(day + "の売上は" + daySales + "円です")
    }

}

class Customer {
    constructor(restaurant, name, number, year, month, day) {
        this.restaurant = restaurant,
        this.name = name,
        this.number = number,
        this.orderedMenu = [],
        this.menu = restaurant.menu,
        this.date = {
            year: year,
            month: month,
            day: day
        }
    }
    order(menuName) {
        for (var i=0; i < this.menu.length; i++) {
            if (this.menu[i].name === menuName) {
                this.orderedMenu.push(
                    {
                        orderedName: menuName,
                        orderedPrice: this.menu[i].price
                    }
                )
            }
        }
        console.log(this.orderedMenu)
    }
    check() {
        var checkedPrice = 0
        for (var i=0; i < this.orderedMenu.length; i++) {
            checkedPrice += this.orderedMenu[i].orderedPrice
        }
        console.log(checkedPrice)

        this.restaurant.customerList.push(this.name)

        this.restaurant.salesList.push(
            {
                name: this.name,
                price: checkedPrice
            }
        )

        return checkedPrice
    }
}

// 実行とデバック

// レストランを立てる
const dennys = new Restaurant('Dennys')
dennys.greeting()
dennys.addMenu("salad", 300)
dennys.addMenu("juice", 500)

dennys.showMenu()
dennys.addreserve("sawaki", 2)

const sawaki = new Customer(dennys, "sawaki", 2, 2019, 8, 23)
sawaki.order("salad")
sawaki.order("salad")
sawaki.check()

const satou = new Customer(dennys, "satou", 5, 2019, 8, 30)
satou.order("juice")
satou.order("juice")
satou.order("juice")
satou.order("juice")
satou.order("juice")
satou.check()

console.log(dennys.customerList)
dennys.allSales()
dennys.salesAnalytics(2019, 8, 23)

