import { Plugin, Notice } from 'obsidian';

export default class ObsidianOGP extends Plugin {
    async onload() {
        const ribbonIconEl = this.addRibbonIcon('dice', 'Obsidian OGP', () => {
			new Notice('Hello world!');
		});
        ribbonIconEl.addClass('my-plugin-ribbon-class');
    }
}
