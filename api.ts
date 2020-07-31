enum MenuLocation {
    //% block="full screen"
    FullScreen,
    //% block="centered"
    Center,
    //% block="top half"
    TopHalf,
    //% block="right half"
    RightHalf,
    //% block="bottom half"
    BottomHalf,
    //% block="left half"
    LeftHalf,
    //% block="top right"
    TopRight,
    //% block="bottom right"
    BottomRight,
    //% block="bottom left"
    BottomLeft,
    //% block="top left"
    TopLeft
}

enum MenuStyle {
    //% block="grid"
    Grid,
    //% block="list"
    List
}

namespace blockMenu {
    //% blockId="block_menu_show_menu"
    //% block="show $style menu at $location with options $options"
    //% options.shadow="lists_create_with"
    //% options.defl="text"
    export function showMenu(options: string[], style: MenuStyle, location: MenuLocation) {
        const state = _getState();

        state.menu.setOptions(options);
        state.menu.setStyle(style);
        state.menu.setLocation(location);
        state.menu.setMenuOpen(true);
    }

    //% blockId="block_menu_close_menu"
    //% block="close menu"
    export function closeMenu() {
        const state = _getState();
        state.menu.setMenuOpen(false);
    }

    //% blockId="block_menu_set_colors"
    //% block="set menu foreground $foreground background $background"
    //% foreground.shadow=colorindexpicker
    //% foreground.defl=15
    //% background.shadow=colorindexpicker
    //% background.defl=1
    export function setColors(foreground: number, background: number) {
        const state = _getState();
        state.menu.setColors(foreground, background, background, foreground);
    }

    //% blockId="block_menu_selected_menu_option"
    //% block="selected menu option"
    export function selectedMenuOption(): string {
        const state = _getState();
        return state.menu.selectedMenuOption();
    }

    //% blockId="block_menu_selected_menu_index"
    //% block="selected menu index"
    export function selectedMenuIndex(): number {
        const state = _getState();
        return state.menu.selectedMenuIndex();
    }

    //% blockId="block_menu_is_menu_open"
    //% block="is menu open"
    export function isMenuOpen(): boolean {
        const state = _getState();
        return state.menu.isOpen();
    }

    //% blockId="block_menu_on_menu_option_selected"
    //% block="on menu option selected $option $index"
    //% draggableParameters="reporter"
    export function onMenuOptionSelected(handler: (option: string, index: number) => void) {
        const state = _getState();
        state.addHandler(handler);
    }

    //% blockId="block_menu_set_selected_index"
    //% block="set selected index $index"
    export function setSelectedIndex(index: number) {
        const state = _getState();
        state.menu.setSelectedIndex(index);
    }

    //% blockId="block_menu_set_selected_option"
    //% block="set selected option $option"
    export function setSelectedOption(option: string) {
        const state = _getState();
        state.menu.setSelectedOption(option);
    }

    //% blockId="block_menu_set_controls_enabled"
    //% block="set controls enabled $enabled"
    export function setControlsEnabled(enabled: boolean) {
        const state = _getState();
        state.controlsEnabled = enabled;
    }
}