export default interface YouVerifyBvnVerificationResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    id: string;
    validations: {
      data: {
        lastName: {
          validated: boolean;
          value: string;
        };
        dateOfBirth: {
          validated: boolean;
          value: string;
        };
        firstName: {
          validated: boolean;
          value: string;
        };
      };
      validationMessages: string;
    };
    parentId: any;
    status: string;
    reason: string;
    dataValidation: boolean;
    selfieValidation: boolean;
    firstName: string;
    middleName: string;
    lastName: string;
    image: string;
    enrollmentBranch: any;
    enrollmentInstitution: any;
    mobile: string;
    dateOfBirth: string;
    isConsent: boolean;
    idNumber: string;
    shouldRetrivedNin: boolean;
    businessId: string;
    type: 'bvn';
    gender: '';
    requestedAt: string;
    requestedById: string;
    country: string;
    createdAt: string;
    lastModifiedAt: string;
    requestedBy: {
      firstName: string;
      lastName: string;
      middleName: string;
      id: string;
    };
  };
}
