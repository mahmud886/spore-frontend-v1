import Image from "next/image";

const characters = [
  {
    name: "Lena",
    role: "Technician",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbxqe5afzhW2ugF-nKNH1Q1GB1CLGiao3LjarIs_Rk0QukTy7yjx3s_E5GtI3JeI3JFEb6OgpQZg0xgT0JSfTZGSQYYMBtqzj73Qu3c2fZwoc_zN5ikl7ub06x1fSbWfoEX0ugg8pnkYSV0gWGaNsO_DEUrdIjFZHX3CnBAJxj4vJyNyLUdoSlnvE84g6y-8PZy5Zj_H8Qqb7Hf-HgEInBd8js15NHBD7pb7mewhHiWSXIRNjWVNuGcYqKhHJuBF9P0-il0gEG7lg",
  },
  {
    name: "Eli",
    role: "Guide",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaJbZ0J6hi8OkpXNNDUrfBGmlKrG1HRMSgSdSY030P-9bSvJkkHL1iI8s64oXQjax96Wc3vgaOjehtZ1XLRIK7olSwM9qRKMJ1og1MyYwe02QLOXC0O2yQuoaV3gIwqx1acRsdH4DMjdJgYBfqNkN85LBk-lPbm26g2SLCKQ6MLTOUKBvVc2XW_PVHJCjEWxBMcmVI4jilkgF5Iu4LNiyIwkYM1QuUFwp0gaqc3nA8zJDRB3wdsHlj941OIapXVPz1IrVDWrX0iac",
  },
  {
    name: "Troopers",
    role: "Armour",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADo9zGBxhtSSE8kcOpfuSRMsYLGA8aisQiw20ePXW9kvPjElBk17N30_sVeDlQGlGwYMtobwbRJ4IqPJAqieBWqjXSc9VLjuMNxw5QcHwlhoAuxD3Y_Weo-67lm6NBa1bUf_95jCb0nlQTLSXnts99w245Eg0QH1YQ6Q6fpcev4iwbetqdqB-n4KQnyx1kQ17ZcmwQZf9waAll0jiFqvysGD3Ge8NfaGORVX4nmjQlv3FKiANTfbWvftwhIBllNUDJbjxA3I3eBUU",
  },
  {
    name: "Dust Keeper",
    role: "Commando",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDDaaVsOBif3z1-kqr5cLN9Gks0Nq_tpUjytXZmRjTHa-p0nGFRaASMfditstiSK4eVsO4TjPbV0q_gosx1DqqMUS0XZg4TKXOoLCOUqkqGgxfzxSwDHPTJfWQyKhvNXmq1xJXe4HhMzK1C7Duul0wnb8IcS8llE15KC6lkyVvAGH1q6fzZ7RM5TTWgqmWEwTIlG1wtIGiv2lrH4ooX5ibd8SNoIZvGlmtpcBtlOrM2gFl4e3q2hVSZxWJAj4XOc8_lhTC6XgRv1Q",
  },
];

export default function CharacterLogsSection() {
  return (
    <section className="py-24 px-8 ">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-3xl font-display font-bold text-primary flex items-center gap-4 uppercase tracking-tighter">
          <span className="text-primary/40 text-4xl font-light">||</span> Character Logs
        </h2>
        <div className="flex gap-4">
          <button className="text-white/40 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-4xl">chevron_left</span>
          </button>
          <button className="text-primary hover:text-white transition-colors">
            <span className="material-symbols-outlined text-4xl">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {characters.map((character, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-primary/10 hover:border-primary/50 transition-all"
          >
            <Image
              alt={character.name}
              className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              src={character.image}
              width={400}
              height={500}
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-primary text-black text-[9px] px-2 py-0.5 font-bold uppercase mb-2 inline-block">
                {character.role}
              </span>
              <h3 className="text-4xl font-display font-black text-white uppercase tracking-tighter">
                {character.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
