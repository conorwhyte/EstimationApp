// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateEpic = `subscription OnCreateEpic {
  onCreateEpic {
    id
    title
    total
    stories {
      items {
        id
        title
        description
        tags
        links
        avgEstimate
        version
      }
      nextToken
    }
    version
  }
}
`;
export const onUpdateEpic = `subscription OnUpdateEpic {
  onUpdateEpic {
    id
    title
    total
    stories {
      items {
        id
        title
        description
        tags
        links
        avgEstimate
        version
      }
      nextToken
    }
    version
  }
}
`;
export const onDeleteEpic = `subscription OnDeleteEpic {
  onDeleteEpic {
    id
    title
    total
    stories {
      items {
        id
        title
        description
        tags
        links
        avgEstimate
        version
      }
      nextToken
    }
    version
  }
}
`;
export const onCreateStory = `subscription OnCreateStory {
  onCreateStory {
    id
    title
    description
    tags
    links
    avgEstimate
    estimates {
      items {
        id
        user
        estimate
        version
      }
      nextToken
    }
    version
  }
}
`;
export const onUpdateStory = `subscription OnUpdateStory {
  onUpdateStory {
    id
    title
    description
    tags
    links
    avgEstimate
    estimates {
      items {
        id
        user
        estimate
        version
      }
      nextToken
    }
    version
  }
}
`;
export const onDeleteStory = `subscription OnDeleteStory {
  onDeleteStory {
    id
    title
    description
    tags
    links
    avgEstimate
    estimates {
      items {
        id
        user
        estimate
        version
      }
      nextToken
    }
    version
  }
}
`;
export const onCreateEstimate = `subscription OnCreateEstimate {
  onCreateEstimate {
    id
    user
    estimate
    story {
      id
      title
      description
      tags
      links
      avgEstimate
      estimates {
        nextToken
      }
      version
    }
    version
  }
}
`;
export const onUpdateEstimate = `subscription OnUpdateEstimate {
  onUpdateEstimate {
    id
    user
    estimate
    story {
      id
      title
      description
      tags
      links
      avgEstimate
      estimates {
        nextToken
      }
      version
    }
    version
  }
}
`;
export const onDeleteEstimate = `subscription OnDeleteEstimate {
  onDeleteEstimate {
    id
    user
    estimate
    story {
      id
      title
      description
      tags
      links
      avgEstimate
      estimates {
        nextToken
      }
      version
    }
    version
  }
}
`;
