INSERT INTO department (name)
  VALUES
  ("Accounting"),
  ("Sales"),
  ("Developement"),
  ("Customer Service");

INSERT INTO role (title, salary, department_id)
  VALUES
  ("Accountant", 60000, 1),
  ("Accounting Dept Manager", 180000, 1),
  ("Salesperson", 60000, 2),
  ("Sales Lead", 120000, 2),
  ("Sales Manager", 180000, 2),
  ("Junior Developer", 60000, 3),
  ("Senior Developer", 120000, 3),
  ("Lead Developer", 180000, 3),
  ("Customer Service Representative", 50000, 4),
  ("Customer Service Manager", 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES
  ("Joe", "Major", 3, NULL),
  ("Jane", "Doe", 3, NULL),
  ("Marc", "Jacobs", 4, NULL);
  ("Gary", "Allstars", 8, 1);