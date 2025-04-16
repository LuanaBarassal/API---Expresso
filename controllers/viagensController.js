const supabase = require('../supabaseClient');

exports.criarViagem = async (req, res) => {
  const viagem = req.body;
  const { data, error } = await supabase.from('viagens').insert([viagem]);

  if (error) return res.status(400).json({ msg: error.message });
  return res.status(201).json({ msg: "Viagem registrada com sucesso" });
};

exports.listarViagens = async (req, res) => {
  const { data, error } = await supabase.from('viagens').select('*');

  if (error) return res.status(400).json({ msg: error.message });
  return res.status(200).json(data);
};