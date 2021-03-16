const Discord = require('discord.js');

module.exports = class Shortcuts {
	/**
	 *
	 * @param {string} clientID
	 * @param {string} guildID
	 */
	constructor(clientID, guildID) {
		this.clientID = clientID;
		this.guildID = guildID;
	}
	// Getters and Setters
	getClientID() {
		return this.clientID;
	}

	getGuildID() {
		return this.guildID;
	}

	// Guild Stuff
	/**
	 *
	 * @param {Discord.Client} client
	 * @param {string} guildID
	 */
	Guild(client, guildID) {
		const server = client.guilds.cache.find((gu) => gu.id === guildID);
		return server;
	}

	/**
	 *
	 * @param {Discord.Client} client
	 * @param {string} guildID
	 */
	GuildID(client, guildID) {
		const server = client.guilds.cache.find((gu) => gu.id === guildID);
		return server.id;
	}

	// Client stuff
	/**
	 *
	 * @param {Discord.Client} client
	 */
	clientID(client) {
		const id = client.user.id;
		return id;
	}
	/**
	 *
	 * @param {Discord.Client} client
	 */
	clientTag(client) {
		const tag = client.user.tag;
		return tag;
	}
	/**
	 *
	 * @param {Discord.Client} client
	 */
	clientName(client) {
		const name = client.user.username;
		return name;
	}
	/**
	 * @param {Discord.Client} client
	 */
	clientDiscriminator(client) {
		const discriminator = client.user.discriminator;
		return discriminator;
	}
	/**
	 *
	 * @param {Discord.Client} client
	 */
	clientAvatarURL(client) {
		const url = client.user.avatarURL();
		return url;
	}
};
