export default {
    computed: {
        sortedEmployees() {
            const tab = this.$store.getters['filter/tab'];
            const enteredSearch = this.$store.getters['filter/search'];

            if (tab === 'all') {
                return this.employees.filter(employee => { 
                    if (enteredSearch === "") return employee;
                    else if (employee.firstName.toLowerCase().indexOf(enteredSearch.toLowerCase()) !== -1 || 
                        employee.lastName.toLowerCase().indexOf(enteredSearch.toLowerCase()) !== -1 || 
                        employee.userTag.toLowerCase().indexOf(enteredSearch.toLowerCase()) !== -1
                    ) {
                        return employee;
                    }
                })
            } else {
                return this.employees
                .filter(employee => employee.position === tab)
                .filter(employee => { 
                    if (enteredSearch === "") return employee;
                    else if (employee.firstName.toLowerCase().indexOf(enteredSearch.toLowerCase()) !== -1 || 
                        employee.lastName.toLowerCase().indexOf(enteredSearch.toLowerCase()) !== -1 || 
                        employee.userTag.toLowerCase().indexOf(enteredSearch.toLowerCase()) !== -1
                    ) {
                        return employee;
                    }
                })
            }
        },
    },
}