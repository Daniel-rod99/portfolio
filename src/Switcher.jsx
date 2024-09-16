import PropTypes from "prop-types";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./Components/MoonIcon";
import { SunIcon } from "./Components/SunIcon";

export default function Switcher({ isDark, setIsDark }) {
  return (
    <Switch
      className=""
      isSelected={isDark === "dark"}
      onValueChange={() => setIsDark(isDark === "dark" ? "light" : "dark")}
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    ></Switch>
  );
}

Switcher.propTypes = {
  isDark: PropTypes.string.isRequired,
  setIsDark: PropTypes.func.isRequired,
};
