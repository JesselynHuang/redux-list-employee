import * as create_get from './create_get';

export const createEmp = (employee) => {
    return {
        type: create_get.ADD_EMPLOYEE,
        employee : employee
    }
}