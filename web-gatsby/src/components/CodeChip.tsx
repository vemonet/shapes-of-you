import React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { Chip, Icon } from "@mui/material";

// @ts-ignore
import PythonIcon from '../images/python_logo.svg';
// @ts-ignore
import TypeScriptIcon from '../images/typescript_logo.svg';
// @ts-ignore
import KubernetesIcon from '../images/kubernetes_logo.svg';
// @ts-ignore
import DockerIcon from '../images/docker_logo.png';
// @ts-ignore
import JavaIcon from '../images/java_logo.png';

const CodeChip = ({ lang }: any) => {
// export default function CodeChip({ lang }: any) {
  const theme = useTheme();

  const codeMap: any = {
    python: {
      label: "Python",
      icon: <Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={PythonIcon} />
            </Icon>
    },
    typescript: {
      label: "TypeScript",
      icon: <Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={TypeScriptIcon} />
            </Icon>
    },
    docker: {
      label: "Docker",
      icon: <Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={DockerIcon} />
            </Icon>
    },
    kubernetes: {
      label: "Kubernetes",
      icon: <Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={KubernetesIcon} />
            </Icon>
    },
    java: {
      label: "Java",
      icon: <Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={JavaIcon} />
            </Icon>
    },
  }

  const MyChip = styled(Chip)(({ theme }) => ({
    // ...theme.typography.h5,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    // marginBottom: theme.spacing(2),
  }));

  return(
    <MyChip
      icon={codeMap[lang.toLowerCase()].icon}
      label={codeMap[lang.toLowerCase()].label}
      variant="outlined"
      size="small"
      // color="warning"
      // color={codeMap[lang].color}
      // avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
    />
  )
}
export default CodeChip;