import overview from './examples/overview.html';
import displays from './examples/displays.html';
import headings from './examples/headings.html';
import bodyText from './examples/body-text.html';

export default {
  title: 'Guidelines / Typography',
};

export const Overview = () => overview;
Overview.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
};

export const Displays = () => displays;
Displays.parameters = {
  docs: {
    source: {
      code: displays,
    },
  },
};

export const Headings = () => headings;
Headings.parameters = {
  docs: {
    source: {
      code: headings,
    },
  },
};

export const BodyText = () => bodyText;
BodyText.parameters = {
  docs: {
    source: {
      code: bodyText,
    },
  },
};
