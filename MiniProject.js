let attempt = 0;
let success = false;

while (attempt < 3) {
    let user = prompt("Tên đăng nhập:");
    let pass = prompt("Mật khẩu:");

    if (user === "admin" && pass === "12345") {
        alert("Đăng nhập thành công!");
        success = true;
        break;
    } else {
        attempt++;
        if (user !== "admin") {
            alert("Sai tài khoản! Còn " + (3 - attempt) + " lần thử.");
        } else {
            alert("Sai mật khẩu! Còn " + (3 - attempt) + " lần thử.");
        }
    }
}

if (!success) {
    alert("Tài khoản đã bị khóa!");
} else {

    let libraries = ["Toán", "Văn", "Anh"];
    let choice;

    do {
        let menu =
            "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN---\n" +
            "1. Nhập thêm lô sách mới\n" +
            "2. Hiển thị danh sách sách\n" +
            "3. Tìm kiếm sách\n" +
            "4. Cập nhật tên sách\n" +
            "5. Đảo ngược thứ tự kệ sách\n" +
            "6. Nhập kho từ nguồn khác\n" +
            "7. Thoát chương trình\n" +
            "Vui lòng chọn (1-7):";

        choice = +prompt(menu);

        switch (choice) {

            case 1:
                let input = prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy):");
                if (input) {
                    let newBooks = input.split(",");
                    let countAdd = 0;

                    for (let i = 0; i < newBooks.length; i++) {
                        let bookName = newBooks[i].trim();
                        if (bookName !== "") {
                            libraries.push(bookName);
                            countAdd++;
                        }
                    }
                    alert("Đã thêm thành công " + countAdd + " cuốn sách mới.");
                }
                break;

            case 2:
                // Hiển thị danh sách
                console.clear();
                console.log("--- DANH SÁCH SÁCH HIỆN CÓ ---");

                if (libraries.length === 0) {
                    console.log("Thư viện hiện đang trống.");
                } else {
                    let stt = 1;
                    for (let book of libraries) {
                        console.log(stt + ". " + book);
                        stt++;
                    }
                }
                alert("Danh sách đã được in ra console (F12).");
                break;

            case 3:
                let searchName = prompt("Nhập tên cuốn sách cần tìm:");
                if (libraries.includes(searchName)) {
                    let index = libraries.indexOf(searchName);
                    alert(
                        'Sách "' + searchName +
                        '" được tìm thấy tại vị trí số ' + index + ' trong mảng.'
                    );
                } else {
                    alert('Không tìm thấy sách "' + searchName + '" trong kho.');
                }
                break;

            case 4:
                let oldName = prompt("Nhập tên sách cần sửa:");
                let foundIndex = libraries.indexOf(oldName);

                if (foundIndex !== -1) {
                    let newName = prompt('Tìm thấy sách "' + oldName + '". Nhập tên mới:');
                    if (newName) {
                        libraries[foundIndex] = newName;
                        alert("Cập nhật thành công!");
                    }
                } else {
                    alert("Sách không tồn tại để sửa.");
                }
                break;

            case 5:
                libraries.reverse();
                console.clear();
                console.log("--- KỆ SÁCH SAU KHI ĐẢO NGƯỢC ---");

                for (let index in libraries) {
                    console.log("Vị trí index [" + index + "]: " + libraries[index]);
                }
                alert("Thứ tự trên kệ đã thay đổi. Kiểm tra console.");
                break;

            case 6:
                let externalLibrary = ["Sách Kỹ Năng", "Truyện Tranh"];
                libraries = libraries.concat(externalLibrary);
                alert("Đã gộp kho sách từ chi nhánh khác thành công.");
                break;

            case 7:
                alert("Hẹn gặp lại!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }

    } while (choice !== 7);
}
