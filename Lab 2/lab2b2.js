const oldData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Sữa rửa mặt' },
    { code: null, name: null },
    { code: null, name: '' },
];

const newData = {
    ab: { code: 'ab', name: 'Son môi' },
    ac: { code: 'ac', name: 'Sữa rửa mặt' },
};

const chuyenarraytoObject = ({ Array = {}, keyId = '' }) =>
    Object.fromEntries(
        Array?.map(item => [keyId ? item?.[keyId] : item, item]) || [],
    );

function filterObject(obj) {
    Object.keys(obj).forEach(key => {
        const product = obj[key];

        // Kiểm tra mã sản phẩm và tên sản phẩm có giá trị không rỗng và không phải null
        const isValidProduct = product && product.code !== null && product.name !== null && product.name !== '';

        if (!isValidProduct) {
            // Xóa sản phẩm không hợp lệ khỏi đối tượng
            delete obj[key];
        }
    }
    );
    return obj;
}

// Chuyển đổi mảng thành đối tượng
const oldDataObject = chuyenarraytoObject({ Array: oldData, keyId: 'code' });

// Lọc đối tượng để loại bỏ sản phẩm không hợp lệ
const filteredOldDataObject = filterObject(oldDataObject);
console.log(filteredOldDataObject);