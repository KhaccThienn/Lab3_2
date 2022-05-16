var data: Array<any> = [
    {
        name: "Tenki no Ko full version",
        category_name: "LightNovel",
        price: 100000,
        sale_price: 68000,
        image: "../Data/tenki.jpg",
    },
    {
        name: "Gotoubun no Hanayome vol 13",
        category_name: "Manga",
        price: 50000,
        sale_price: 35000,
        image: "../Data/gotoubun.jpg",
    },
    {
        name: "Ba Ngày Hạnh Phúc full version",
        category_name: "LightNovel",
        price: 233000,
        sale_price: 195000,
        image: "../Data/bangay.jpg",
    },
    {
        name: "Your Name full version",
        category_name: "LightNovel",
        price: 150000,
        sale_price: 127000,
        image: "../Data/yn.jpg",
    },
    {
        name: "Combo Nhắn Gửi Một Tôi, Người Đã Yêu Em + Nhắn Gửi Tất Cả Các Em, Những Người Tôi Đã Yêu",
        category_name: "LightNovel",
        price: 399999,
        sale_price: 200000,
        image: "../Data/combo.jpg",
    },
    {
        name: "Five Minutes Per Second",
        category_name: "LightNovel",
        price: 70000,
        sale_price: 35000,
        image: "../Data/fpc.jpg",
    },
];

function myDatas():Array<any> {
    return [
        {
            name: "Tenki no Ko full version",
            category_name: "LightNovel",
            price: 100000,
            sale_price: 68000,
            image: "../Data/tenki.jpg",
        },
        {
            name: "Gotoubun no Hanayome vol 13",
            category_name: "Manga",
            price: 50000,
            sale_price: 35000,
            image: "../Data/gotoubun.jpg",
        },
        {
            name: "Ba Ngày Hạnh Phúc full version",
            category_name: "Manga",
            price: 233000,
            sale_price: 195000,
            image: "../Data/bangay.jpg",
        },
        {
            name: "Your Name full version",
            category_name: "LightNovel",
            price: 150000,
            sale_price: 127000,
            image: "../Data/yn.jpg",
        },
        {
            name: "Combo Nhắn Gửi Một Tôi, Người Đã Yêu Em + Nhắn Gửi Tất Cả Các Em, Những Người Tôi Đã Yêu",
            category_name: "LightNovel",
            price: 399999,
            sale_price: 200000,
            image: "../Data/combo.jpg",
        }, 
        {
            name: "Five Minutes Per Second",
            category_name: "LightNovel",
            price: 70000,
            sale_price: 35000,
            image: "../Data/fpc.jpg",
        },
    ];
};

var showProductList = function (data: any) {
    var _html = '';
    for (let key of data) {
        _html += `
            <tr>
                <th scope="row">${key.name}</th>
                <td>${key.category_name}</td>
                <td><del>${key.price}</del></td>
                <td>${key.sale_price}</td>
                <td><img src="${key.image}"/></td>
            </tr>
        `;
    }
    var _bodyList:any = document.getElementById("tbody-list");
    _bodyList.innerHTML = _html;
}
showProductList(data);

var input_cate: any = document.getElementById('input_cate');
var btn_filter_cate:any = document.getElementById('btn');

btn_filter_cate.onclick = function () {
    let _myData = myDatas();
    let cates = input_cate.value;

    if (cates == '') {
        alert('Vui Long Nhap Category Name');
        return;
    }

    let ProductFilter = data.filter(function (obj) {
        return cates == obj.category_name;
    });
    showProductList(ProductFilter);
};

var sortPrices = (sort_type: string) => {
    let _myData = myDatas();
    if (sort_type == 'ascending') {
        let priceSort = data.sort(function (a: any, b: any) {
            return a.price < b.price ? -1 : 0;
        });
        showProductList(priceSort);
    } else if (sort_type == 'descending') {
        let priceSort = data.sort(function (a: any, b: any) {
            return a.price > b.price ? -1 : 0;
        });
        showProductList(priceSort);
    } else {
        showProductList(data);
        return;
    }
};

var input_f:any = document.getElementById("input_first");
var input_s:any = document.getElementById("input_second");
var btn_sort:any = document.getElementById('btn_sort');

btn_sort.onclick = function () {
    let first = input_f.value;
    let second = input_s.value;

    if (first == '' || second == '') {
        alert('Vui Long Nhap Gia Tri');
        return;
    }

    let Filter = data.filter(function (obj) {
        return first <= obj.sale_price && obj.sale_price <= second; 
    });
    showProductList(Filter);
}