
  
    

    class Expense {
      constructor(title, amount, category) {
        this.title = title;
        this.amount = amount;
        this.category = category;
    
      }
    }

    class ExpenseTracker {
      constructor() {
        this.expenses = [];
        this.total = 0;
      }

      addExpense(expense) {
        this.expenses.push(expense);
        this.total += expense.amount;
        this.render();
      }

      deleteExpense(id) {
        const expense = this.expenses.find(e => e.id === id);
          this.total -= expense.amount;
          this.expenses = this.expenses.filter(e => e.id !== id);
          this.render();
        
      }

      render() {
        const list = document.getElementById("expenseList");
        const total = document.getElementById("total");

        list.innerHTML = "";
        this.expenses.forEach(exp => {
          const div = document.createElement("div");
          div.classList.add("expense-item");
          div.innerHTML = `
            ${exp.title} - ₹${exp.amount} (${exp.category})
            <button class="delete-btn" onclick="tracker.deleteExpense(${exp.id})">X</button>
          `;
          list.appendChild(div);
        });

        total.innerText = this.total;
      }
    }

    
    const tracker = new ExpenseTracker();

    document.getElementById("addBtn").addEventListener("click", () => {
      const title = document.getElementById("title").value;
      const amount =Number (document.getElementById("amount").value);
      const category = document.getElementById("category").value;
        const expense = new Expense(title, amount, category);
        tracker.addExpense(expense);

        
        document.getElementById("title").value = "";
        document.getElementById("amount").value = "";
      } 
    
    );

  