import { gql } from "graphql-tag";

export const LOGIN = gql`
  mutation ($password: String!, $username: String!) {
    login(password: $password, username: $username) {
      token
      user {
        accountType
        dateJoined
        email
        firstName
        isActive
        isStaff
        isSuperuser
        lastLogin
        lastName
        phoneNumber
        userId
        username
        dealerships {
          dealershipId
          dealershipName
          dealershipAddress
        }
      }
    }
  }
`;

export const ACCOUNTS = gql`
  query accounts {
    accounts {
      userId
      username
      email
      accountType
      firstName
      lastName
      phoneNumber
      dateJoined
      lastLogin
      isActive
      isStaff
      isSuperuser
    }
  }
`;

export const ORDERS = gql`
  query ($dealershipId: String!) {
    getOrders(dealershipId: $dealershipId) {
      orderId
      createdDate
      customer {
        address {
          addressId
          city
          country
          state
          street
          zipCode
        }
        firstName
        lastName
        email
        phoneNumber
        userId
        username
      }
      dealership {
        dealershipCity
        dealershipCountry
        dealershipLatitude
        dealershipLongitude
        dealershipLogo
        dealershipId
        dealershipAddress
        dealershipName
        dealershipZipCode
        servicePackages {
          dealershipId
          servicePackageDescription
          servicePackageDuration
          servicePackageId
          servicePackageName
          servicePackagePrice
          servicePackageType
        }
      }
      notes
      orderDeliveryDate
      orderStatus
      pickupLocation
      serviceType {
        dealershipId
        servicePackageDescription
        servicePackageDuration
        servicePackageId
        servicePackageName
        servicePackagePrice
        servicePackageType
      }
      valetVehicleRequest

      vehicle {
        available
        carColor
        carId
        carImage {
          imageId
          imageLink
        }
        carInsurance
        carMake
        carModel
        carName
        carRegistration
        carType
        carVin
        carYear
        mileage
        status
      }
    }
  }
`;

export const GET_ASSIGNED_ORDER_BY_ID = gql`
  query ($assignId: String!) {
    getAssignedOrderById(assignId: $assignId) {
      assignId
      assignStatus
    }
  }
`;

export const GET_ASSIGNED_ORDER_SUBSCRIPTION = gql`
  subscription {
    orderCreated {
      notes
      orderDeliveryDate
      orderId
      pickupLocation
      customer {
        userId
        accountType
        email
        firstName
        lastName
        username
      }
      vehicle {
        carType
        carMake
        carModel
        carName
      }
      orderType {
        orderType
      }
    }
  }
`;

export const ORDER = gql`
  query ($orderId: String!) {
    getOrder(id: $orderId) {
      createdDate
      customer {
        accountType
        dateJoined
        email
        firstName
        isActive
        isStaff
        isSuperuser
        lastLogin
        lastName
        phoneNumber
        userId
        username
        dealerships {
          dealershipId
          dealershipName
          dealershipAddress
        }
        profilePicture {
          createdAt
          isCurrent
          pictureId
          pictureLink
        }
      }
      dealership {
        active
      }
      notes
      orderDeliveryDate
      orderId
      orderStatus
      pickupLocation
      serviceType {
        dealershipId
        servicePackageDescription
        servicePackageDuration
        servicePackageName
        servicePackagePrice
        servicePackageType
      }
      valetVehicleRequest
      vehicle {
        available
        carColor
        carId
        carImage {
          imageId
          imageLink
        }
        carInsurance
        carMake
        carModel
        carName
        carRegistration
        carType
        carVin
        carYear
        mileage
        plateNumber
        status
      }
      driver {
        accountType
        dateJoined
        email
        firstName
        isActive
        isStaff
        isSuperuser
        lastLogin
        lastName
        phoneNumber
        userId
        username
        createdAt
        profilePicture {
          createdAt
          isCurrent
          pictureId
          pictureLink
        }
      }
    }
  }
`;

export const GET_EMPLOYEES = gql`
  query ($dealershipName: String!, $accountType: String) {
    getEmployeesInDealership(
      dealershipName: $dealershipName
      accountType: $accountType
    ) {
      accountType
      dateJoined
      email
      firstName
      isActive
      isStaff
      isSuperuser
      lastLogin
      lastName
      phoneNumber
      userId
      username
      createdAt
      profilePicture {
        createdAt
        isCurrent
        pictureId
        pictureLink
      }
      dealerships {
        dealershipId
        dealershipName
        dealershipAddress
      }
    }
  }
`;

export const GET_AVAILABLE_DRIVERS = gql`
  query ($dealershipId: String!) {
    getAvailableDriversInDealership(dealershipId: $dealershipId) {
      accountType
      dateJoined
      email
      firstName
      isActive
      isStaff
      isSuperuser
      lastLogin
      lastName
      phoneNumber
      userId
      username
      createdAt
      profilePicture {
        createdAt
        isCurrent
        pictureId
        pictureLink
      }
      dealerships {
        dealershipId
        dealershipName
        dealershipAddress
      }
    }
  }
`;

export const NUMBER_OF_DRIVERS = gql`
  query ($dealershipId: String!) {
    getNumberOfDriversInDealership(dealershipId: $dealershipId)
  }
`;

export const NUMBER_OF_MANAGERS = gql`
  query ($dealershipId: String!) {
    getNumberOfManagersInDealership(dealershipId: $dealershipId)
  }
`;

export const SEARCH_USERS = gql`
  query ($searchTerm: String!, $accountType: String!) {
    searchUsers(searchTerm: $searchTerm, accountType: $accountType) {
      userId
      accountType
      username
      firstName
      lastName
      email
      phoneNumber
      profilePicture {
        pictureLink
      }
    }
  }
`;

export const GET_CONFIRMATION = gql`
  query {
    getConfirmation {
      confirmationId
      confirmationDate
      confirmationStatus
      dealership {
        dealershipName
      }
      user {
        accountType
        username
        firstName
        lastName
      }
    }
  }
`;

export const NOTIFICATIONS = gql`
  query {
    unconfirmedRequests
  }
`;

export const CONFIRM_REQUEST = gql`
  mutation ($confirmationId: String!) {
    acceptUserDealership(confirmationId: $confirmationId) {
      confirmationDate
      confirmationId
      confirmationStatus
      dealership {
        dealershipName
        dealershipId
      }
    }
  }
`;

export const REJECT_REQUEST = gql`
  mutation ($confirmationId: String!) {
    rejectUserDealership(confirmationId: $confirmationId) {
      confirmationDate
      confirmationId
      confirmationStatus
      dealership {
        dealershipName
        dealershipId
      }
    }
  }
`;

export const ADD_USER_TO_DEALERSHIP = gql`
  mutation ($dealershipName: String!, $userId: String!) {
    addUsersToDealership(dealershipName: $dealershipName, userId: $userId)
  }
`;

export const GET_VEHICLES = gql`
  query ($dealershipId: String!) {
    getCarInfo(dealershipId: $dealershipId) {
      available
      carColor
      carId
      carImage {
        imageId
        imageLink
      }
      carInsurance
      carMake
      carModel
      carName
      carRegistration
      carType
      carVin
      carYear
      mileage
      plateNumber
      status
      createdDate
    }
  }
`;

export const GET_AVAILABLE_VEHICLES = gql`
  query ($dealershipId: String) {
    getAvailableCarInfo(dealershipId: $dealershipId) {
      available
      carColor
      carId
      carImage {
        imageId
        imageLink
      }
      carInsurance
      carMake
      carModel
      carName
      carRegistration
      carType
      carVin
      carYear
      mileage
      plateNumber
      status
      createdDate
    }
  }
`;

export const ASSIGN_ORDER = gql`
  mutation ($input: AssignOrderInput!) {
    assignOrder(input: $input) {
      acceptDate
      assignDate
      assignedById
      assignId
      assignStatus
      customerId
      dealership {
        dealershipId
      }
      drivers {
        userId
      }
      order {
        createdDate
        notes
        orderDeliveryDate
        orderId
        orderStatus
        pickupLocation
        valetVehicleRequest
      }
      valetVehicle {
        carId
      }
    }
  }
`;
