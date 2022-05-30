# Page strucure

```mermaid
classDiagram
    class Login{
        LoginForm
        Reset Pass
        SignUp
        AuthFirebase()
    }

    class List View{
        Rows of tools 
        Retrieve all tools owned()
        RowView()
    }
 
 Login --|> List View

```
