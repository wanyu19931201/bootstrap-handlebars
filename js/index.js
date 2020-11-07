$(document).ready(function () {
    var source = document.getElementById("product-template").innerHTML;
    var template = Handlebars.compile(source);

    //Get Product Info
    var random = Math.floor((Math.random() * 60) + 1);
    var max_page = Math.floor(random / 20);
    if (random % 20 > 0)
        max_page++;

    var showing_page = 1;
    show_products(showing_page);

    //Set Page Info
    $(".current-page").text(showing_page);
    $(".max-page").text("/" + max_page);







    $(".last-page").addClass("disabled");
    if (max_page == 1)
        $(".next-page").addClass("disabled");



    $("#tops").click(function () {


    });


    $(".last-page").click(function () {
        if (showing_page == 1) {

        } else {
            $(".next-page").removeClass("disabled");

            showing_page--;
            show_products(showing_page);
            if (showing_page <= 1)
                $(".last-page").addClass("disabled");
            $(".current-page").text(showing_page);
            $(".max-page").text("/" + max_page);
        }
    });


    $(".next-page").click(function () {
        // alert("next");
        if (showing_page == max_page) { }
        else {
            showing_page++;
            $(".last-page").removeClass("disabled");

            show_products(showing_page);
            if (showing_page >= max_page) {
                $(".next-page").addClass("disabled");

            }
            $(".current-page").text(showing_page);
            $(".max-page").text("/" + max_page);
        }
    });
    function show_products(page) {
        $(".product-container .row").empty();
        var start_product_id = 20 * (page - 1) + 1;
        var end_product_id = page * 20;
        if (end_product_id > random)
            end_product_id = random;
        for (var i = start_product_id; i <= end_product_id; i++) {
            var parameter = { img_src: "https://picsum.photos/300/200/?random=" + i, id: i, price: i * 20 };
            var html = template(parameter);
            $(".product-container .row").append(html);
        }
        if (end_product_id % 4 != 0) {
            for (var i = 1; i <= 4 - (end_product_id % 4); i++) {
                var parameter = { img_src: "" + i, id: 0, price: i * 20 };
                var html = template(parameter);
                $(".product-container .row").append(html);
                $(".product-container .row .product:last-child").css("visibility", "hidden");
            }
        }
    }
});

