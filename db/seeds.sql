INSERT INTO department (name)
  VALUES
  ("Accounting"),
  ("Sales"),
  ("Developement"),
  ("Customer Service");

INSERT INTO roles (title, salary, department_id)
  VALUES
  ("Accountant", 60000, 1),
  ("Accounting Dept Manager", 180000, 1),
  ("Salesperson", 60000, 2),
  ("Sales Lead", 120000, 2),
  ("Sales Manager", 180000, 2),
  ("Junior Developer", 60000, 3),
  ("Senior Developer", 120000, 3),
  ("Lead Developer", 180000, 3),
  ("CS Rep", 50000, 4),
  ("CS Manager", 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES
  ("Joe", "Major", 3, NULL),
  ("Jane", "Doe", 3, NULL),
  ("Marc", "Jacobs", 4, NULL);
  
INSERT INTO employee (first_name, last_name, role_id, manager_id)
	VALUES
	("Gary", "Allstars", 8, 1);