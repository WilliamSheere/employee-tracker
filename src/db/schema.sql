-- Create department table CREATE a table called `department`:
    -- Add a column `id` as the PRIMARY KEY (auto-incrementing unique ID for each department).
    -- Add a column `name` for department names:
        -- Ensure it is UNIQUE (no duplicate names allowed).
        -- Ensure it is NOT NULL (cannot be empty).

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- Create role table CREATE a table called `role`:
    -- Add a column `id` as the PRIMARY KEY (auto-incrementing unique ID for each role).
    -- Add a column `title` for the role title:
        -- Ensure it is UNIQUE (no duplicate role titles allowed).
        -- Ensure it is NOT NULL (cannot be empty).
    -- Add a column `salary` to store the role's salary:
        -- Ensure it is NOT NULL (cannot be empty).
    -- Add a column `department_id` to indicate which department the role belongs to:
        -- Ensure it is NOT NULL (a role must belong to a department).
        -- Add a FOREIGN KEY constraint linking `department_id` to the `id` column of the `department` table, so the role is always tied to a valid department.

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create employee table CREATE a table called `employee`:
    -- Add a column `id` as the PRIMARY KEY (auto-incrementing unique ID for each employee).
    -- Add a column `first_name` for the employee's first name:
        -- Ensure it is NOT NULL (cannot be empty).
    -- Add a column `last_name` for the employee's last name:
        -- Ensure it is NOT NULL (cannot be empty).
    -- Add a column `role_id` to indicate the employee's role:
        -- Ensure it is NOT NULL (every employee must have a role).
        -- Add a FOREIGN KEY constraint linking `role_id` to the `id` column of the `role` table, so the employee is always tied to a valid role.
    -- Add a column `manager_id` to indicate who manages the employee:
        -- Allow this column to be NULL (some employees might not have managers).
        -- Add a FOREIGN KEY constraint linking `manager_id` to the `id` column of the same `employee` table, creating a self-referential relationship.
        -- If the manager is deleted, set this field to NULL automatically (`ON DELETE SET NULL`).

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
