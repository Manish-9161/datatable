$('#table1').DataTable({
    "pageLength": 3
});


$('#table1').DataTable({
    data: json,
    columns: [
        { data: 'name' },
        { data: 'age' },
        { data: 'sex' },
        { data: 'occupation' }
    ],
    "pageLength": 3
});


var json = [
    {
        "name": "Ram",
        "age": "21",
        "sex": "Male",
        "occupation": "Doctor"
    },
    {
        "name": "Mohan",
        "age": "32",
        "sex": "Male",
        "occupation": "Teacher"
    },
    {
        "name": "Rani",
        "age": "42",
        "sex": "Female",
        "occupation": "Nurse"
    },
    {
        "name": "Johan",
        "age": "23",
        "sex": "Female",
        "occupation": "Software Engineer"
    },
    {
        "name": "Shajia",
        "age": "39",
        "sex": "Female",
        "occupation": "Farmer"
    }
];