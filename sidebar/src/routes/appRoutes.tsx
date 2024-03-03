import ProcessPackagesPageLayout from "../pages/dashboard/ProcessPackagesPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import ProcessPackages from "../pages/dashboard/ProcessPackages";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import BusinessObjects from "../pages/installation/BusinessObjects";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import Configuration from '../pages/configurations/Configuration';
import DataSources from '../pages/datasources/DataSources';
import PresentationResources from '../pages/presentationresources/PresentationResources';
import UIBuilder from '../pages/uibuilder/UIBuilder';
import SyncFormats from '../pages/syncformats/SyncFormats';
import ServiceDescriptors from '../pages/servicedescriptors/ServiceDescriptors';
import RulebaseModels from '../pages/rulebasemodels/RulebaseModels';
import ResourceBundle from '../pages/resourcebundle/ResourceBundle';

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/installation",
    element: <BusinessObjects />,
    state: "installation",
    sidebarProps: {
      displayText: "Business Objects",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/configurations",
    element: <Configuration />,
    state: "configurations",
    sidebarProps: {
      displayText: "Configurations",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/datasources",
    element: <DataSources />,
    state: "datasources",
    sidebarProps: {
      displayText: "Data Sources",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/presentationresources",
    element: <PresentationResources />,
    state: "presentationresources",
    sidebarProps: {
      displayText: "Presentation Resources",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <ProcessPackagesPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Process Packages",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <ProcessPackages/>,
        state: "dashboard.index"
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Default"
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Analytic"
        }
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Saas"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Repository Models",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Alert"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Button"
        }
      }
    ]
  },
  {
    path: "/resourcebundle",
    element: <ResourceBundle />,
    state: "resourcebundle",
    sidebarProps: {
      displayText: "Resource Bundle",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/rulebasemodels",
    element: <RulebaseModels />,
    state: "rulebasemodels",
    sidebarProps: {
      displayText: "Rulebase Models",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/servicedescriptors",
    element: <ServiceDescriptors />,
    state: "servicedescriptors",
    sidebarProps: {
      displayText: "Service Descriptors",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/syncformats",
    element: <SyncFormats />,
    state: "syncformats",
    sidebarProps: {
      displayText: "Sync Formats",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/uibuilder",
    element: <UIBuilder />,
    state: "uibuilder",
    sidebarProps: {
      displayText: "UI Builder",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;