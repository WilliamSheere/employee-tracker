INSERT INTO department (name) VALUES 
('Engineering'),
('Human Resources'),
('Marketing'),
('Legal');

-- Insert sample data into role table
INSERT INTO role (title, salary, department_id) VALUES 
('Lead Engineer', 150000, 1),
('Software Engineer', 90000, 1),
('HR Manager', 75000, 2),
('HR Associate', 65000, 2),
('Marketing Manager', 80000, 3),
('Sales Representative', 60000, 3),
('Lead Leagalist', 70000, 4),
('Legal Advisor', 60000, 4);

-- Insert sample data into employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Alice', 'Johnson', 1, NULL),
('Bob', 'Smith', 2, 1),
('Charlie', 'Brown', 3, NULL),
('Diana', 'Prince', 4, 3),
('Ethan', 'Hunt', 5, NULL),
('Fiona', 'Gallagher', 6, 5),
('George', 'Miller', 7, NULL),
('Hannah', 'Davis', 8, 7);