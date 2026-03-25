import React from 'react';

// MUI icon imports — add more here as needed
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import SmartButton from '@mui/icons-material/SmartButton';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import ForkRight from '@mui/icons-material/ForkRight';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Lock from '@mui/icons-material/Lock';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Add from '@mui/icons-material/Add';
import MergeType from '@mui/icons-material/MergeType';
import CommitIcon from '@mui/icons-material/Commit';
import Tab from '@mui/icons-material/Tab';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import LabelIcon from '@mui/icons-material/Label';
import ExpandCircleDown from '@mui/icons-material/ExpandCircleDown';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Category from '@mui/icons-material/Category';
import Code from '@mui/icons-material/Code';
import BugReport from '@mui/icons-material/BugReport';
import CloudUpload from '@mui/icons-material/CloudUpload';
import Security from '@mui/icons-material/Security';
import Insights from '@mui/icons-material/Insights';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Info from '@mui/icons-material/Info';
import OpenInFull from '@mui/icons-material/OpenInFull';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Notifications from '@mui/icons-material/Notifications';
import Settings from '@mui/icons-material/Settings';
import Close from '@mui/icons-material/Close';
import HourglassEmpty from '@mui/icons-material/HourglassEmpty';
import Search from '@mui/icons-material/Search';
import GridView from '@mui/icons-material/GridView';
import History from '@mui/icons-material/History';
import Layers from '@mui/icons-material/Layers';
import DataObject from '@mui/icons-material/DataObject';
import Memory from '@mui/icons-material/Memory';
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined';

// Map Material Symbols string names → MUI icon components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  auto_awesome: AutoAwesome,
  smart_button: SmartButton,
  rocket_launch: RocketLaunch,
  fork_right: ForkRight,
  delete_forever: DeleteForever,
  lock: Lock,
  chevron_right: ChevronRight,
  add: Add,
  merge_type: MergeType,
  commit: CommitIcon,
  tab: Tab,
  terminal: TerminalIcon,
  database: StorageIcon,
  label: LabelIcon,
  input: ExpandCircleDown, // closest analog
  expand_circle_down: ExpandCircleDown,
  open_in_new: OpenInNew,
  category: Category,
  code: Code,
  bug_report: BugReport,
  cloud_upload: CloudUpload,
  security: Security,
  insights: Insights,
  content_copy: ContentCopy,
  thumb_up: ThumbUp,
  thumb_up_outlined: ThumbUpOutlined,
  info: Info,
  open_in_full: OpenInFull,
  expand_more: ExpandMore,
  notifications: Notifications,
  settings: Settings,
  close: Close,
  progress_activity: HourglassEmpty,
  search: Search,
  grid_view: GridView,
  history: History,
  layers: Layers,
  data_object: DataObject,
  memory: Memory,
};

const muiSizeMap = {
  sm: 'small',
  md: 'medium',
  lg: 'medium',
  xl: 'large',
} as const;

interface IconProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fill?: boolean; // kept for API compat, no-op with MUI
}

export function Icon({ name, className = '', size = 'md' }: IconProps) {
  const MuiIcon = iconMap[name];

  if (!MuiIcon) {
    // Graceful fallback — don't crash, just warn in dev
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Icon] "${name}" not in iconMap — add it to components/Icon.tsx`);
    }
    return <span className={`inline-block w-5 h-5 rounded-full bg-outline/30 ${className}`} aria-hidden />;
  }

  return <MuiIcon fontSize={muiSizeMap[size]} className={className} aria-hidden="true" />;
}
