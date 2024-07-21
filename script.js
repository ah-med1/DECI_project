var num_1, num_2, operator, answer;


num_1 = Number(window.prompt('first number'));
num_2 = Number(window.prompt('second number'));
operator = window.prompt('give the operator to function you want');
for (var count = 0; count < 1; count++) {
    if (operator == '+') {
    answer = num_1 + num_2;
    } else if (operator == '-') {
    answer = num_1 - num_2;
    } else if (operator == '*') {
    answer = num_1 * num_2;
    } else if (operator == '/') {
    answer = num_1 / num_2;
    } else {
    window.alert('invalide ');
    }
    window.alert([num_1,operator,num_2,'=',answer].join(''));
}