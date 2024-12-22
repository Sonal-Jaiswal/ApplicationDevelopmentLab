# Lecture 1: Introduction to HTML Forms

### **What Are HTML Forms?**

HTML forms are used to collect user input and send it to a server for processing. They play a crucial role in enabling user interaction with web applications.

---

### **1. Structure of a Form**

A basic form is defined using the `<form>` element.

```html
<form action="/submit" method="post">
  <!-- Form elements go here -->
</form>
```

#### Key Attributes:

- **`action`**: Specifies the URL where the form data is sent.
- **`method`**: Determines how the data is sent (`GET` or `POST`).

---

### **2. Common Form Elements**

#### **Text Input**

For single-line text input:

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name">
```

#### **Password Input**

For sensitive information:

```html
<label for="password">Password:</label>
<input type="password" id="password" name="password">
```

#### **Textarea**

For multi-line text input:

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50"></textarea>
```

#### **Radio Buttons**

For selecting one option:

```html
<p>Gender:</p>
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>
```

#### **Checkbox**

For selecting multiple options:

```html
<p>Interests:</p>
<input type="checkbox" id="coding" name="interest" value="coding">
<label for="coding">Coding</label>
<input type="checkbox" id="music" name="interest" value="music">
<label for="music">Music</label>
```

#### **Dropdown (Select)**

For choosing from a list:

```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="usa">USA</option>
  <option value="india">India</option>
  <option value="uk">UK</option>
</select>
```

#### **Date Input**

For selecting a date:

```html
<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">
```

#### **Buttons**

Submit, reset, or custom actions:

```html
<input type="submit" value="Submit">
<input type="reset" value="Reset">
<button type="button" onclick="alert('Hello!')">Click Me</button>
```

---

### **3. GET vs POST**

#### **GET Method**

- Appends data to the URL as query strings.
- Data is visible and limited in size.
- Suitable for retrieving data (e.g., search forms).

#### **POST Method**

- Sends data in the request body.
- Data is hidden and can be large.
- Suitable for sensitive or modifying operations (e.g., login forms).

```html
<form action="/search" method="get">
  <input type="text" name="query" placeholder="Search">
  <input type="submit" value="Search">
</form>

<form action="/login" method="post">
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <input type="submit" value="Login">
</form>
```

---

### **4. Organizing Forms**

#### **Fieldsets and Legends**

Group related elements:

```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="age">Age:</label>
  <input type="number" id="age" name="age">
</fieldset>
```

---

### **5. Enhancing Forms with Attributes**

- **`required`**: Makes a field mandatory.
- **`placeholder`**: Provides a hint inside the field. For example:
  ```html
  <input type="text" name="username" placeholder="Enter your username">
  ```
- **`maxlength` and `minlength`**: Restrict the number of characters.
- **`value`**: Sets a default value.

---

### **6. Example: Simple Registration Form**

```html
<form action="/register" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" placeholder="Choose a username" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" placeholder="Create a password" required>

  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob" required>

  <input type="submit" value="Register">
</form>
```

---

 Forms collect and submit user input to servers.

- Choose `GET` for data retrieval and `POST` for sensitive submissions.
