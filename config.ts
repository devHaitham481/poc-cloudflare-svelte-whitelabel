
export const featureScopes = {
  Core: {
    features: {
      Login: {
        enabled: true
      },
      Registration: {
        enabled: true
      },
      Search: {
        enabled: true
      }
    }
  },
  Shared: {
    features: {
      SpecialSearch: {
        enabled: true
      },
      FleetManager: {
        enabled: true
      },
      MachineFinder: {
        enabled: true
      }
    }
  },
  Custom: {
    whiteLabelName: 'App1',
    features: {
      CustomFeature1: {
        enabled: false
      },
      CustomFeature2: {
        enabled: true
      },
    },
  },
  whiteLabelName: 'App2',
  features: {
    CustomFeature1: {
      enabled: true
    },
    CustomFeature2: {
      enabled: true
    }
  }
}
