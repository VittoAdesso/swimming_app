import { FormGroup } from "@angular/forms";

export function comparePassword(pass: string, repass: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[pass];
        const matchingControl = formGroup.controls[repass];

        if (matchingControl.errors && !matchingControl.errors["mustMatch"]) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true })
        } else {
            matchingControl.setErrors(null)
        }
    }

}