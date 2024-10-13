import React, { createContext, useState, ReactNode } from 'react';

// Define the form data types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

// Define the context type
interface FormContextType {
  formData: FormData;
  errors: Partial<FormData>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  validateForm: () => boolean;
  resetForm: () => void;
}

// Create the context with default values
export const FormContext = createContext<FormContextType | undefined>(undefined);

// Context provider component
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate the form
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Reset the form
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
    setErrors({});
  };

  // Provide the context values to children
  return (
    <FormContext.Provider
      value={{
        formData,
        errors,
        handleInputChange,
        validateForm,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};