const {
    quote
} = require("@mengkodingan/ckptw");
const axios = require("axios");
const mime = require("mime-types");

module.exports = {
    name: "metaimage",
    aliases: ["metaimg"],
    category: "ai-image",
    handler: {
        coin: 10
    },
    code: async (ctx) => {
        if (await handler(ctx, module.exports.handler)) return;

        const input = ctx.args.join(" ") || null;

        if (!input) return await ctx.reply(
            `${quote(tools.msg.generateInstruction(["send"], ["text"]))}\n` +
            quote(tools.msg.generateCommandExample(ctx._used, "moon"))
        );

        try {
            const apiUrl = tools.api.createUrl("fasturl", "/aiimage/meta", {
                prompt: "image"
            });
            const {
                data
            } = await axios.get(apiUrl);
            const result = tools.general.getRandomElement(data.result.imagine_card[0].imagine_media);

            return await ctx.reply({
                image: {
                    url: result.uri
                },
                mimetype: mime.lookup("png"),
                caption: `${quote(`Prompt: ${input}`)}\n` +
                    "\n" +
                    config.msg.footer
            });
        } catch (error) {
            console.error(`[${config.pkg.name}] Error:`, error);
            if (error.status !== 200) return await ctx.reply(config.msg.notFound);
            return await ctx.reply(quote(`⚠️ Terjadi kesalahan: ${error.message}`));
        }
    }
};