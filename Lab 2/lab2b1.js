const class1 = [
    {
        mssv: "PD0000",
        NAME: "Nguyen Van A",
        avgPoint: 8.9,
        trainingPoint: 7,
        status: "pass",

    },
    {
        mssv: "PD0001",
        NAME: "Nguyen Van B",
        avgPoint: 4.9,
        trainingPoint: 10,
        status: "passs",

    },

];
const class2 = [
    {
        mssv: "PD0002",
        NAME: "Nguyen Van C",
        avgPoint: 4.9,
        trainingPoint: 10,
        status: "fail",

    },
    {
        mssv: "PD0003",
        NAME: "Nguyen Van D",
        avgPoint: 10,
        trainingPoint: 10,
        status: "pass",

    },
    {
        mssv: "PD0004",
        NAME: "Nguyen Van E",
        avgPoint: 10,
        trainingPoint: 2,
        status: "pass",

    },
];

// In ra sinh viên pass
const allstudents = [...class1, ...class2].filter(student => student?.status !== 'fail');

// Sắp xếp theo điểm trung bình từ cao xuống thấp
const sortedByAvgPoint = [...allstudents].sort((a, b) => b.avgPoint - a.avgPoint);
console.log("Danh sách sinh viên theo điểm trung bình từ cao xuống thấp");
console.log(sortedByAvgPoint);

// Sắp xếp theo điểm training từ cao xuống thấp
const sortedByTrainPoint = [...allstudents].sort((a, b) => b.trainingPoint - a.trainingPoint);
console.log("Danh sách sinh viên theo điểm training từ cao xuống thấp");
console.log(sortedByTrainPoint);

// Tìm sinh viên có điểm trung bình cao nhất
const maxByAvgPoint = allstudents.reduce((max, student) => (student.avgPoint > max.avgPoint ? student : max));
console.log("Thông tin sinh viên có điểm trung bình cao nhất và là Ong vàng");
console.log(maxByAvgPoint);

// Tìm sinh viên có điểm training cao nhất
const maxByTraining = allstudents.reduce((max, student) => (student.trainingPoint > max.trainingPoint ? student : max));
console.log("Thông tin sinh viên có điểm training cao nhất");
console.log(maxByTraining);
