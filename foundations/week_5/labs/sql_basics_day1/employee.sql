WHERE city = 'Calgary';

SELECT MIN(birth_date) FROM employee;

SELECT MAX(birth_date) FROM employee;

SELECT employee_id FROM employee
WHERE first_name = 'Nancy' AND last_name = 'Edwards';

SELECT * FROM employee
WHERE reports_to = 2;

SELECT COUNT(*) FROM employee
WHERE city = 'Lethbridge';